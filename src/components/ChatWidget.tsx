"use client";

import { useEffect, useState } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

const DEFAULT_MESSAGE: Message = {
  role: "ai",
  text: "Hi! I am your AI Career Advisor. How can I help you with your career today?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([DEFAULT_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [field, setField] = useState<string | null>(null);

  // load field from quiz
  useEffect(() => {
    const savedField = localStorage.getItem("field");
    setField(savedField);
  }, []);

  // load chat history
  useEffect(() => {
    const saved = localStorage.getItem("chat");
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([DEFAULT_MESSAGE]);
    }
  }, []);

  // save chat history
  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          field,
        }),
      });

      const data = await res.json();

      const aiMsg: Message = {
        role: "ai",
        text: data.reply || "No response from AI",
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Error: AI service not working",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">

      {/* CHAT BOX */}
      {open && (
        <div className="w-80 h-96 bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden">

          {/* HEADER */}
          <div className="bg-blue-600 text-white p-3 font-semibold">
            AI Career Advisor
          </div>

          {/* MESSAGES */}
          <div className="flex-1 p-3 overflow-auto text-sm space-y-2">

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.role === "user"
                    ? "ml-auto bg-blue-100 text-right"
                    : "mr-auto bg-gray-100"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <p className="text-gray-400 text-sm">
                AI is typing...
              </p>
            )}
          </div>

          {/* INPUT */}
          <div className="p-2 border-t flex gap-2">

            <input
              className="flex-1 border rounded px-2 py-1 text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about career..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 rounded"
            >
              Send
            </button>

          </div>
        </div>
      )}

      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg"
      >
        💬
      </button>

    </div>
  );
}