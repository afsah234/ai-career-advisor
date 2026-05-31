import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="text-center pt-16 md:pt-24 pb-12 md:pb-16 bg-gradient-to-b from-blue-50 to-gray-50 px-6">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          About AI Career Advisor
        </h1>

        <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Empowering students and professionals with AI-driven career guidance
          to make smarter, faster, and more confident decisions.
        </p>

        <div className="mt-6">
          <span className="inline-block text-xs px-4 py-1 rounded-full bg-blue-100 text-blue-600">
            Built with Next.js + AI
          </span>
        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 md:pb-20">

        {/* MAIN CARD */}
        <div className="bg-white border rounded-2xl p-6 md:p-12 shadow-sm">

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            AI Career Advisor is a smart web application designed to help users
            discover the right career path based on their interests, skills,
            and future job market trends. It combines AI logic with simple UX
            to make career decisions easier and more accurate.
          </p>

          {/* DEVELOPER CARD */}
          <div className="mt-8 md:mt-10 p-5 md:p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border">

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Developer
            </h2>

            <p className="mt-3 text-gray-800 font-medium">
              Afsah Farooqui — Software Engineer
            </p>

            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Passionate about AI, web development, and building real-world intelligent systems.
            </p>

          </div>

        </div>

        {/* GRID SECTION */}
        <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* MISSION */}
          <div className="p-6 md:p-8 bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">

            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">Mission</h3>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              To help users make better career decisions using AI-powered insights,
              personalized recommendations, and interactive guidance tools that simplify
              career planning and improve decision confidence.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              <span className="text-xs px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full">AI Guidance</span>
              <span className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full">Career Planning</span>
              <span className="text-xs px-3 py-1 bg-purple-100 text-purple-600 rounded-full">Smart Decisions</span>
            </div>

          </div>

          {/* TECHNOLOGY */}
          <div className="p-6 md:p-8 bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">

            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">Technology</h3>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Built using modern web technologies including{" "}
              <span className="font-medium text-gray-800">Next.js</span>,{" "}
              <span className="font-medium text-gray-800">TypeScript</span>, and{" "}
              <span className="font-medium text-gray-800">Tailwind CSS</span>,
              combined with AI-powered backend logic for intelligent career decision-making.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              <span className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full">Next.js</span>
              <span className="text-xs px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full">TypeScript</span>
              <span className="text-xs px-3 py-1 bg-sky-100 text-sky-600 rounded-full">Tailwind CSS</span>
              <span className="text-xs px-3 py-1 bg-purple-100 text-purple-600 rounded-full">AI Logic</span>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}