"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 text-center">
      {/* Background decorative circles */}
      <div className="animate-pulse-slow absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-200 opacity-30"></div>
      <div className="animate-pulse-slow absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-purple-200 opacity-30"></div>

      <h1 className="relative text-8xl font-extrabold text-gray-800 sm:text-9xl">
        404
      </h1>

      <p className="relative mt-4 max-w-lg text-lg text-gray-600 sm:text-xl">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <Link
        href="/"
        className="relative mt-6 inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white shadow-lg transition hover:scale-105 hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  );
}

// Add animation to globals.css or inside the page:
// @keyframes pulse-slow {
//   0%, 100% { transform: scale(1); opacity: 0.3; }
//   50% { transform: scale(1.1); opacity: 0.5; }
// }
// .animate-pulse-slow { animation: pulse-slow 6s infinite; }
