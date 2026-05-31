import { Brain, TrendingUp, Telescope, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="text-center px-6 py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Smarter Career Decisions with AI
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Discover your ideal career path based on your interests, skills, and future opportunities.
          No confusion just clear direction.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a href="/quiz" className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 text-center">
            Take Quiz
          </a>
          <a href="/about" className="px-6 py-3 border rounded-xl hover:bg-gray-100 text-center">
            Learn More
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">

        <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-3">
          What i offer
        </p>
        <h2 className="text-center text-xl md:text-2xl font-medium text-gray-900 mb-10 md:mb-12">
          Everything you need to plan your career
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          <div className="p-6 md:p-7 rounded-2xl border border-blue-100 bg-white">
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
              <Brain className="text-blue-600" size={22} strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-medium text-gray-900">AI Career Matching</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Get personalized career suggestions based on your interests, skills, and goals.
            </p>
          </div>

          <div className="p-6 md:p-7 rounded-2xl border border-blue-100 bg-white">
            <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-5">
              <TrendingUp className="text-teal-600" size={22} strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-medium text-gray-900">Skill Direction</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Know exactly what skills to learn next to stay ahead in your chosen field.
            </p>
          </div>

          <div className="p-6 md:p-7 rounded-2xl border border-blue-100 bg-white">
            <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center mb-5">
              <Telescope className="text-purple-600" size={22} strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-medium text-gray-900">Future Insights</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Explore careers that are growing in demand and future-proof your decisions.
            </p>
          </div>

          <div className="p-6 md:p-7 rounded-2xl border border-blue-100 bg-white">
            <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
              <MessageCircle className="text-blue-600" size={22} strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-medium text-gray-900">Live AI Chatbot</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Still confused? Ask our AI chatbot anything about your career — get instant, personalized answers.
            </p>
            <p className="text-xs text-blue-500 font-medium mt-4 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse inline-block" />
              Available now — bottom right corner
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}