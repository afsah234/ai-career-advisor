"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Code2, Briefcase, Palette } from "lucide-react";

export default function QuizPage() {
  const router = useRouter();

  const startQuiz = (field: string) => {
    router.push(`/quiz/${field}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

      <Navbar />

      {/* HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center pt-24 px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Choose Your Career Path
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          Take a quick AI-powered quiz and discover your ideal career direction
        </p>

        <div className="mt-6">
          <span className="inline-block text-xs px-4 py-1 rounded-full bg-blue-100 text-blue-600">
            Personalized results in under 2 minutes
          </span>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="max-w-5xl mx-auto px-6 mt-16 grid md:grid-cols-3 gap-8 pb-20">

        {/* TECH */}
        <div
          onClick={() => startQuiz("tech")}
          className="cursor-pointer group bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-200 transition">
            <Code2 className="text-blue-600" size={26} />
          </div>

          <h2 className="text-xl font-semibold text-gray-900">
            Technology
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Software, AI, Cybersecurity, Data Science & more
          </p>

          <p className="text-blue-600 text-sm mt-5 font-medium">
            Start Quiz →
          </p>
        </div>

        {/* BUSINESS */}
        <div
          onClick={() => startQuiz("business")}
          className="cursor-pointer group bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-5 group-hover:bg-green-200 transition">
            <Briefcase className="text-green-600" size={26} />
          </div>

          <h2 className="text-xl font-semibold text-gray-900">
            Business
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Marketing, Finance, Entrepreneurship & Management
          </p>

          <p className="text-green-600 text-sm mt-5 font-medium">
            Start Quiz →
          </p>
        </div>

        {/* DESIGN */}
        <div
          onClick={() => startQuiz("design")}
          className="cursor-pointer group bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <div className="w-14 h-14 rounded-xl bg-pink-100 flex items-center justify-center mb-5 group-hover:bg-pink-200 transition">
            <Palette className="text-pink-600" size={26} />
          </div>

          <h2 className="text-xl font-semibold text-gray-900">
            Design
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            UI/UX, Graphic Design, Product Design & Creativity
          </p>

          <p className="text-pink-600 text-sm mt-5 font-medium">
            Start Quiz →
          </p>
        </div>

      </div>
    </div>
  );
}