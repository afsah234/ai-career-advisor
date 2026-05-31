"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const quizData: any = {
  tech: [
    {
      question: "What is React?",
      options: ["Library", "Database", "OS", "Server"],
      answer: "Library",
    },
    {
      question: "AI stands for?",
      options: ["Auto Input", "Artificial Intelligence", "Auto Internet", "None"],
      answer: "Artificial Intelligence",
    },
    {
      question: "Which language for web?",
      options: ["Python", "C++", "JavaScript", "Java"],
      answer: "JavaScript",
    },
    {
      question: "Frontend tool?",
      options: ["Node.js", "React", "MongoDB", "Express"],
      answer: "React",
    },
    {
      question: "Backend runs on?",
      options: ["Server", "Browser", "UI", "CSS"],
      answer: "Server",
    },
  ],

  business: [
    {
      question: "What is marketing?",
      options: ["Selling products", "Coding", "Designing", "Testing"],
      answer: "Selling products",
    },
    {
      question: "Startup means?",
      options: ["New company", "Old company", "App", "Shop"],
      answer: "New company",
    },
    {
      question: "Finance is about?",
      options: ["Money", "Design", "Coding", "Games"],
      answer: "Money",
    },
    {
      question: "CEO stands for?",
      options: ["Chief Executive Officer", "Code Expert", "None", "Manager"],
      answer: "Chief Executive Officer",
    },
    {
      question: "Business growth depends on?",
      options: ["Strategy", "Luck", "Sleep", "Gaming"],
      answer: "Strategy",
    },
  ],

  design: [
    {
      question: "UI means?",
      options: ["User Interface", "User Input", "Unit Info", "None"],
      answer: "User Interface",
    },
    {
      question: "UX means?",
      options: ["User Experience", "User Extra", "UI Extend", "None"],
      answer: "User Experience",
    },
    {
      question: "Design tool?",
      options: ["Figma", "Node", "Mongo", "React"],
      answer: "Figma",
    },
    {
      question: "Color theory is?",
      options: ["Study of colors", "Coding", "Math", "Server"],
      answer: "Study of colors",
    },
    {
      question: "Good UI is?",
      options: ["Simple", "Complex", "Slow", "Broken"],
      answer: "Simple",
    },
  ],
};

export default function Quiz() {
  const router = useRouter();
  const params = useParams();
  const field = params.field as string;

  const questions = quizData[field] || [];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const handleAnswer = (option: string) => {
    if (selected) return;

    setSelected(option);

    const correct = questions[current].answer;
    const isCorrect = option === correct;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      const nextScore = isCorrect ? score + 1 : score;

      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        localStorage.setItem("score", String(nextScore));
        localStorage.setItem("total", String(questions.length));
        localStorage.setItem("field", field);
        router.push("/results");
      }
    }, 900);
  };

  if (!questions.length) {
    return (
      <div>
        <Navbar />
        <p className="text-center mt-20 text-gray-500">Invalid Field</p>
      </div>
    );
  }

  const progress = ((current + 1) / questions.length) * 100;
  const question = questions[current];

  return (
    <div className="min-h-screen">

      <Navbar />

      {/* QUIZ CARD */}
      <div className="max-w-3xl mx-auto mt-16 p-8 bg-white rounded-2xl shadow-lg border">

        {/* HEADER */}
        <div className="text-center">

          <h1 className="text-2xl font-bold capitalize text-gray-900">
            {field} Quiz
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Question {current + 1} of {questions.length}
          </p>

          {/* PROGRESS BAR */}
          <div className="w-full bg-gray-200 h-2 rounded-full mt-5">
            <div
              className="h-2 bg-blue-600 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

        </div>

        {/* QUESTION */}
        <h2 className="text-xl font-semibold mt-10 text-center text-gray-800">
          {question.question}
        </h2>

        {/* OPTIONS */}
        <div className="grid gap-4 mt-8">

          {question.options.map((opt: string, i: number) => {
            const correct = question.answer;

            let base =
              "p-4 border rounded-xl text-center cursor-pointer transition font-medium";

            if (!selected) {
              base += " hover:bg-blue-50 hover:border-blue-400";
            }

            if (selected) {
              if (opt === correct) {
                base += " bg-green-500 text-white border-green-500";
              } else if (opt === selected) {
                base += " bg-red-500 text-white border-red-500";
              } else {
                base += " opacity-50";
              }
            }

            return (
              <button
                key={i}
                disabled={!!selected}
                onClick={() => handleAnswer(opt)}
                className={base}
              >
                {opt}
              </button>
            );
          })}

        </div>

        {/* SCORE MINI DISPLAY */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Score: {score}
        </p>

      </div>
    </div>
  );
}