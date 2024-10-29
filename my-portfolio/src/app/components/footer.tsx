import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Waheed.</h2>
        <nav className="mb-6">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/muhammadwaheedaree" className="text-gray-400 hover:text-gray-600">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/muhammadwaheedaree/" className="text-gray-400 hover:text-gray-600">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:m128waheed@gmail.com" className="text-gray-400 hover:text-gray-600">
            <TfiEmail size={24} />
          </a>
          <a href="https://www.threads.net/@muhammadwaheedaree?invite=0" className="text-gray-400 hover:text-gray-600">
            <FaSquareThreads size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Muhammad Waheed. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
