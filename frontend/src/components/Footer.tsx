export default function Footer() {
  return (
    <footer className="border-t bg-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">CareerAI</h2>
          <p className="text-gray-500 text-sm mt-1 max-w-xs leading-relaxed">
            AI-powered career guidance for students & professionals.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-4">

            {/* GitHub */}
            <a
              href="https://github.com/afsah234"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center hover:border-gray-400 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

            {/* LinkedIn */}

            <a
              href="https://linkedin.com/in/afsah09"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center hover:border-gray-400 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Freelancer */}
            <a
              href="https://www.freelancer.com/u/afsahfarooqui119"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center hover:border-gray-400 transition"
            >
              <img src="/freelancer.png" alt="Freelancer" width={18} height={18} />
            </a>

          </div>
        </div>

        {/* Nav Links */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
            Links
          </p>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600 transition">Home</a>
            <a href="/quiz" className="hover:text-blue-600 transition">Quiz</a>
            <a href="/about" className="hover:text-blue-600 transition">About</a>
            <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-gray-400">© 2026 CareerAI. Built by Afsah Farooqui.</p>
        <p className="text-xs text-gray-400">Powered by RAG · Groq · Next.js</p>
      </div>
    </footer>
  );
}