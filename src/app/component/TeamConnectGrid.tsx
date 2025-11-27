"use client";

import { Check, ExternalLink, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useRef, useState } from "react";

import type { TeamMember } from "@/lib/teamDirectory";

const MAX_ATTEMPTS = 3;
const LOCK_DURATION_MS = 2 * 60 * 1000;

type CardState = {
  codeInput: string;
  status: "idle" | "error" | "success";
  message?: string;
  attempts: number;
  lockedUntil: number | null;
};

type CardStateMap = Record<string, CardState>;

const createStateMap = (members: TeamMember[]): CardStateMap =>
  members.reduce<CardStateMap>((acc, member) => {
    acc[member.id] = {
      codeInput: "",
      status: "idle",
      message: undefined,
      attempts: 0,
      lockedUntil: null,
    };
    return acc;
  }, {});

type Props = {
  members: TeamMember[];
  showHireBanner?: boolean;
};

const TeamConnectGrid = ({ members, showHireBanner = true }: Props) => {
  const router = useRouter();
  const [cardStates, setCardStates] = useState<CardStateMap>(() =>
    createStateMap(members),
  );
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [visitorEmail, setVisitorEmail] = useState("");
  const [visitorMessage, setVisitorMessage] = useState("");
  const [formStatus, setFormStatus] = useState<{
    state: "idle" | "submitting" | "success" | "error";
    message?: string;
  }>({ state: "idle" });
  const successTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setCardStates(createStateMap(members));
  }, [members]);

  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  const isDialogOpen = Boolean(selectedMember);

  const resetForm = () => {
    setVisitorEmail("");
    setVisitorMessage("");
    setFormStatus({ state: "idle" });
  };

  const handleCodeInputChange = (memberId: string, value: string) => {
    setCardStates((prev) => ({
      ...prev,
      [memberId]: {
        ...prev[memberId],
        codeInput: value,
        status: "idle",
        message: undefined,
      },
    }));
  };

  const closeDialog = () => {
    if (successTimeoutRef.current) {
      clearTimeout(successTimeoutRef.current);
      successTimeoutRef.current = null;
    }
    setSelectedMember(null);
    resetForm();
  };

  const handleVerifyCode = (member: TeamMember) => {
    setCardStates((prev) => {
      const now = Date.now();
      const current = prev[member.id];
      if (!current) {
        return prev;
      }

      if (current.lockedUntil && now < current.lockedUntil) {
        const secondsLeft = Math.max(
          1,
          Math.ceil((current.lockedUntil - now) / 1000),
        );
        return {
          ...prev,
          [member.id]: {
            ...current,
            status: "error",
            message: `Too many attempts. Try again in ${secondsLeft}s.`,
          },
        };
      }

      const normalizedInput = current.codeInput.trim();

      if (!normalizedInput) {
        return {
          ...prev,
          [member.id]: {
            ...current,
            status: "error",
            message: "Enter the code to continue.",
          },
        };
      }

      if (normalizedInput === member.code) {
        setSelectedMember(member);
        resetForm();
        return {
          ...prev,
          [member.id]: {
            ...current,
            status: "success",
            message: undefined,
            attempts: 0,
            lockedUntil: null,
          },
        };
      }

      const attempts = current.attempts + 1;
      const shouldLock = attempts >= MAX_ATTEMPTS;

      return {
        ...prev,
        [member.id]: {
          ...current,
          status: "error",
          attempts,
          message: shouldLock
            ? "Too many attempts. Please wait 2 minutes before trying again."
            : "Code not recognized. Please try again.",
          lockedUntil: shouldLock ? now + LOCK_DURATION_MS : null,
        },
      };
    });
  };

  const handleDialogSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedMember) return;

    setFormStatus({ state: "submitting" });

    try {
      const response = await fetch("/api/team-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teamId: selectedMember.id,
          visitorEmail,
          visitorMessage,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Unable to send your request.");
      }

      setFormStatus({
        state: "success",
        message:
          "Code verified and your request has been sent. Check your inbox for confirmation.",
      });

      setCardStates((prev) => ({
        ...prev,
        [selectedMember.id]: {
          ...(prev[selectedMember.id] ?? {
            codeInput: "",
            status: "idle",
            attempts: 0,
            lockedUntil: null,
          }),
          status: "success",
          message: "Code verified and request delivered.",
        },
      }));

      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
      successTimeoutRef.current = setTimeout(() => {
        closeDialog();
      }, 2200);
    } catch (error) {
      setFormStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  };

  const getLockSeconds = (lockedUntil: number | null) =>
    lockedUntil ? Math.max(0, Math.ceil((lockedUntil - Date.now()) / 1000)) : 0;

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => {
          const state = cardStates[member.id];
          const isLocked =
            Boolean(state?.lockedUntil) &&
            getLockSeconds(state.lockedUntil) > 0;

          return (
            <div key={member.id} className="flex flex-col gap-4">
              <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 md:p-6">
                <div className="flex items-center gap-x-4">
                  <img
                    className="size-20 rounded-full object-cover object-top"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="grow">
                    <h3 className="font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {member.bio}
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm text-gray-600">
                  Enter {member.name}&apos;s code to verify your identity.
                </p>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter code"
                    value={state?.codeInput ?? ""}
                    onChange={(event) =>
                      handleCodeInputChange(member.id, event.target.value)
                    }
                    disabled={isLocked || state?.status === "success"}
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 transition outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 disabled:cursor-not-allowed disabled:bg-gray-100"
                  />
                  <button
                    type="button"
                    onClick={() => handleVerifyCode(member)}
                    disabled={
                      isLocked ||
                      !state?.codeInput.trim() ||
                      state?.status === "success"
                    }
                    className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                  >
                    Continue
                  </button>
                </div>
                {state?.message && (
                  <p
                    className={`mt-2 text-sm ${
                      state.status === "success"
                        ? "text-emerald-600"
                        : "text-red-600"
                    }`}
                  >
                    {state.message}
                  </p>
                )}
                {isLocked && state?.lockedUntil && (
                  <p className="mt-1 text-xs text-gray-500">
                    Locked for {getLockSeconds(state.lockedUntil)}s.
                  </p>
                )}
              </div>
            </div>
          );
        })}

        {showHireBanner && (
          <div className="group col-span-full flex flex-col justify-center rounded-xl border border-dashed border-gray-200 p-4 text-center hover:shadow-2xs focus:shadow-2xs focus:outline-hidden md:p-6 lg:col-span-1">
            <h3 className="text-lg text-gray-800">
              We have experts to handle your project
            </h3>
            <div onClick={() => router.push("https://wa.me/16833335332")}>
              <span className="inline-flex items-center gap-x-2 text-blue-600 group-hover:text-blue-700 group-focus:text-blue-700">
                Hire Us
                <ExternalLink size={15} />
              </span>
            </div>
          </div>
        )}
      </div>

      {isDialogOpen && selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closeDialog}
          ></div>
          <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <button
              onClick={closeDialog}
              className="absolute top-4 right-4 rounded-full bg-gray-100 p-1 text-gray-600 transition hover:bg-gray-200"
            >
              <X className="size-4" />
            </button>
            <p className="text-sm font-medium text-gray-500 uppercase">
              Contact Request
            </p>
            <h3 className="mt-1 text-2xl font-semibold text-gray-900">
              You&apos;re contacting {selectedMember.name}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Once you submit the form, we&apos;ll confirm your request and send
              an email to {selectedMember.name}.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleDialogSubmit}>
              <div>
                <label
                  htmlFor="visitorEmail"
                  className="text-sm font-medium text-gray-700"
                >
                  Your email
                </label>
                <input
                  id="visitorEmail"
                  type="email"
                  required
                  value={visitorEmail}
                  onChange={(event) => setVisitorEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 transition outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="visitorMessage"
                  className="text-sm font-medium text-gray-700"
                >
                  Message (optional)
                </label>
                <textarea
                  id="visitorMessage"
                  rows={3}
                  value={visitorMessage}
                  onChange={(event) => setVisitorMessage(event.target.value)}
                  placeholder="Share context or requests for this project."
                  className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 transition outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                />
              </div>

              {formStatus.message && (
                <p
                  className={`text-sm ${
                    formStatus.state === "success"
                      ? "text-emerald-600"
                      : formStatus.state === "error"
                        ? "text-red-600"
                        : "text-gray-500"
                  }`}
                >
                  {formStatus.message}
                </p>
              )}

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={formStatus.state === "submitting"}
                  className={`inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white transition ${
                    formStatus.state === "success"
                      ? "bg-emerald-600 hover:bg-emerald-600"
                      : "bg-gray-900 hover:bg-gray-700"
                  } disabled:cursor-not-allowed disabled:bg-gray-400`}
                >
                  {formStatus.state === "success" && (
                    <Check className="mr-2 h-4 w-4" />
                  )}
                  {formStatus.state === "submitting"
                    ? "Verifying..."
                    : formStatus.state === "success"
                      ? "Verified"
                      : "Verify code"}
                </button>
                <button
                  type="button"
                  onClick={closeDialog}
                  className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamConnectGrid;
