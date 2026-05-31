import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HEADER */}
      <section className="text-center pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5xl font-bold text-gray-900">
          Contact Us
        </h1>

        <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
          Have a question, feedback, or want to collaborate? 
          We’re here to help and respond as quickly as possible.
        </p>

        <div className="mt-6">
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
            We usually reply within 24 hours
          </span>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white border rounded-2xl p-6 md:p-10 shadow-sm">

          <form className="space-y-5">

            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Subject</label>
              <input
                type="text"
                placeholder="What is this about?"
                className="mt-1 w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                rows={6}
                placeholder="Write your message..."
                className="mt-1 w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

        <div className="text-center mt-10 text-sm text-gray-500">
          Or email us directly at{" "}
          <span className="text-gray-800 font-medium">
          afsahfarooqui234@gmail.com
          </span>
        </div>
      </section>

    </main>
  );
}