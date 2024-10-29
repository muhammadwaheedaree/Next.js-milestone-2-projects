import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
          <div className="text-left mb-8 md:mb-0">
            <span className="bg-yellow-400 text-yellow-800 px-2 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              Welcome
            </span>
            <h1 className="text-5xl font-bold mb-4">I&apos;m Developer</h1>
            <p className="text-gray-600 mb-6 max-w-md">
              Experienced frontend developer with a passion for creating
              visually stunning and user-friendly websites
            </p>
            <div className="space-x-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
                Hire Me
              </button>
              <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
                Download CV
              </button>
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/image.png"
              alt="Designer"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </main>
      <div className="flex justify-center space-x-6 mb-8">
        <a href="https://github.com/muhammadwaheedaree" className="text-gray-400 hover:text-gray-600">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/muhammadwaheedaree/" className="text-gray-400 hover:text-gray-600">
          {<FaLinkedin size={24} />}
        </a>
        <a href="mailto:m128waheed@gmail.com" className="text-gray-400 hover:text-gray-600">
          <TfiEmail size={24} />
        </a>
        <a href="https://www.threads.net/@muhammadwaheedaree?invite=0" className="text-gray-400 hover:text-gray-600">
          <FaSquareThreads size={24} />
        </a>
      </div>
      <div className="flex justify-center mb-8">
        <Link
          href="/about"
          className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
