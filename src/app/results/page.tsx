"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function ResultPage() {
  const [show, setShow] = useState(false);

  const score =
    typeof window !== "undefined"
      ? Number(localStorage.getItem("score"))
      : 0;

  const total =
    typeof window !== "undefined"
      ? Number(localStorage.getItem("total"))
      : 0;

  const field =
    typeof window !== "undefined"
      ? localStorage.getItem("field")
      : "";

  const percentage = total ? Math.round((score / total) * 100) : 0;

  return (
    <div>
      <Navbar />

      <div className="text-center mt-20">

        <h1 className="text-3xl font-bold text-blue-600">
          Quiz Completed 🎉
        </h1>

        <button
          onClick={() => setShow(true)}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Check Result
        </button>

        {show && (
          <div className="mt-10 max-w-xl mx-auto p-6 shadow-lg rounded-xl">

            <h2 className="text-2xl font-bold text-green-600">
              Score: {score} / {total}
            </h2>

            <p className="mt-2 text-gray-600">
              Percentage: {percentage}%
            </p>

            <p className="mt-2 text-gray-600">
              Field: {field}
            </p>

            <a
              href="/quiz"
              className="inline-block mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg"
            >
              Retake Quiz
            </a>

          </div>
        )}

      </div>
    </div>
  );
}