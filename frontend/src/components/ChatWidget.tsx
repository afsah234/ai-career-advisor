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

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([DEFAULT_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [field, setField] = useState<string | null>(null);

  useEffect(() => {
    const savedField = localStorage.getItem("field");
    setField(savedField);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("chat");
    if (saved) setMessages(JSON.parse(saved));
    else setMessages([DEFAULT_MESSAGE]);
  }, []);

  useEffect(() => {
    localStorage.setItem("chat", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, field }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "ai", text: data.answer || "No response" }]);
    } catch {
      setMessages((prev) => [...prev, { role: "ai", text: "Error: AI service not working" }]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">

      {/* CHAT BOX */}
      {open && (
        <div
          className="
            mb-3
            bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden
            w-[calc(100vw-2rem)] h-[70vh]
            sm:w-80 sm:h-96
          "
        >
          {/* HEADER */}
          <div className="bg-blue-600 text-white px-4 py-3 font-semibold flex justify-between items-center shrink-0">
            <span className="text-sm sm:text-base">AI Career Advisor</span>
            <button onClick={() => setOpen(false)} className="text-white text-xl leading-none">
              ×
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "ml-auto bg-blue-100 text-right"
                    : "mr-auto bg-gray-100"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <p className="text-gray-400 text-xs">AI is typing...</p>}
          </div>

          {/* INPUT */}
          <div className="p-2 border-t flex gap-2 shrink-0">
            <input
              className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about career..."
              onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg text-2xl flex items-center justify-center"
      >
        💬
      </button>

    </div>
  );
}