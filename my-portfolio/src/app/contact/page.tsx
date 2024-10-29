import Footer from "@/app/components/footer";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 flex flex-col">
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-center mb-4">Get in touch</h2>
          <p className="text-center text-gray-600 mb-12">
            Do you have a project in your mind, contact me here
          </p>
          <div className="flex flex-col md:flex-row justify-between items-stretch max-w-5xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-cyan-400 text-white p-8 rounded-lg w-full md:w-1/2 flex flex-col justify-center items-center text-center">
              <h3 className="font-bold text-2xl mb-6">Find Me</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <Mail className="mr-2" size={20} />
                  <p>Email: m128waheed@gmail.com</p>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="mr-2" size={20} />
                  <p>Tel: +923 238 293 672</p>
                </div>
              </div>
            </div>
            <form className="w-full md:w-1/2 space-y-4 flex flex-col">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Email"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 flex-grow"
                aria-label="Message"
              ></textarea>
              <button
                type="submit"
                className="bg-cyan-400 text-white px-6 py-3 rounded-lg hover:bg-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
