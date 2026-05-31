import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white">

      {/* LOGO */}
      <Link href="/" className="text-2xl font-bold text-blue-600">
        AI Career Advisor
      </Link>

      {/* CENTER LINKS */}
      <div className="flex gap-6 text-gray-700">

        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>

        <Link href="/about" className="hover:text-blue-600">
          About
        </Link>

        <Link href="/quiz" className="hover:text-blue-600">
          Quiz
        </Link>

        {/* NEW: Contact Page */}
        <Link href="/contact" className="hover:text-blue-600">
          Contact
        </Link>

      </div>

      {/* RIGHT BUTTONS */}
      <div className="flex items-center gap-3">

        <Link
          href="/"
          className="text-gray-700 hover:text-blue-600"
        >
          Login
        </Link>

        <Link
          href="/"
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          Sign Up
        </Link>

      </div>

    </nav>
  );
}