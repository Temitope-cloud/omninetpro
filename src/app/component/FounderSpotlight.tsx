"use client";

import { useState } from "react";

const FOUNDER_CODE = "101011";
const FOUNDER_ID = "founder";
const FOUNDER_NAME = "Taiwo (Founder)";
const FOUNDER_EMAIL = "support@omninetpro.com";

const FounderSpotlight = () => {
  const [codeInput, setCodeInput] = useState("");
  const [status, setStatus] = useState<{
    state: "idle" | "error" | "verified";
    message?: string;
  }>({ state: "idle" });
  const [visitorEmail, setVisitorEmail] = useState("");
  const [visitorMessage, setVisitorMessage] = useState("");
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const resetForm = () => {
    setVisitorEmail("");
    setVisitorMessage("");
    setFormState("idle");
  };

  const handleVerify = () => {
    if (codeInput.trim() === FOUNDER_CODE) {
      setStatus({
        state: "verified",
        message: "Code confirmed. Send a note to the founder.",
      });
    } else {
      setStatus({
        state: "error",
        message: "Code not recognized. Please try again.",
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status.state !== "verified") return;

    try {
      setFormState("submitting");
      const response = await fetch("/api/team-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          teamId: FOUNDER_ID,
          visitorEmail,
          visitorMessage,
        }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.message || "Unable to send your request.");
      }

      setFormState("success");
      setCodeInput("");
      setStatus({ state: "idle" });
      resetForm();
    } catch (error) {
      setFormState("error");
    }
  };

  return (
    <section className="mx-auto mt-10 mb-16 max-w-5xl rounded-3xl border border-gray-200 bg-white px-6 py-10 shadow-[0_20px_65px_rgba(15,23,42,.08)] sm:px-10 sm:py-12">
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.4em] text-gray-500 uppercase">
            Founder&apos;s Spot
          </p>
          <h3 className="mt-2 text-3xl font-semibold text-gray-900">
            Message {FOUNDER_NAME}
          </h3>
          <p className="mt-3 text-base text-gray-600">
            Use the private code to contact the founder directly. Your request
            goes straight to{" "}
            <a
              href={`mailto:${FOUNDER_EMAIL}`}
              className="text-gray-900 underline"
            >
              {FOUNDER_EMAIL}
            </a>{" "}
            and you&apos;ll receive a confirmation email instantly.
          </p>

          <div className="mt-6 space-y-3 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-medium text-gray-700">
              Verify the founder&apos;s access code
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={codeInput}
                onChange={(event) => {
                  setCodeInput(event.target.value);
                  if (status.state !== "idle") {
                    setStatus({ state: "idle" });
                  }
                }}
                placeholder="Enter code"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 transition outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
              />
              <button
                type="button"
                onClick={handleVerify}
                className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
              >
                Verify code
              </button>
            </div>
            {status.message && (
              <p
                className={`text-sm ${
                  status.state === "verified"
                    ? "text-emerald-600"
                    : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
        >
          <p className="text-sm font-medium tracking-wide text-gray-500 uppercase">
            Direct message
          </p>
          <h4 className="mt-1 text-lg font-semibold text-gray-900">
            {/* Show a message if and after verification */}
            {status.state === "verified"
              ? "Share your email and note."
              : "Verify the founder's access code"}
          </h4>

          <div className="mt-5 space-y-4">
            <div>
              <label
                htmlFor="founderEmail"
                className="text-sm font-medium text-gray-700"
              >
                Your email
              </label>
              <input
                id="founderEmail"
                type="email"
                required
                value={visitorEmail}
                onChange={(event) => setVisitorEmail(event.target.value)}
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 transition outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                disabled={
                  status.state !== "verified" || formState === "submitting"
                }
              />
            </div>
            <div>
              <label
                htmlFor="founderMessage"
                className="text-sm font-medium text-gray-700"
              >
                Message (optional)
              </label>
              <textarea
                id="founderMessage"
                rows={3}
                value={visitorMessage}
                onChange={(event) => setVisitorMessage(event.target.value)}
                placeholder="Project context, goals, timelines..."
                className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 transition outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                disabled={
                  status.state !== "verified" || formState === "submitting"
                }
              />
            </div>

            {formState === "success" && (
              <p className="text-sm text-emerald-600">
                Sent! You’ll receive a confirmation shortly.
              </p>
            )}
            {formState === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={
                status.state !== "verified" || formState === "submitting"
              }
              className="inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {formState === "submitting" ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FounderSpotlight;
