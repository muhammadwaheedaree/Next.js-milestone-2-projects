import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h2 className="footer-logo">Waheed.</h2>
          <nav className="footer-nav">
            <ul>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="footer-social">
            <a href="https://github.com/muhammadwaheedaree">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/muhammadwaheedaree/">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:m128waheed@gmail.com">
              <TfiEmail size={24} />
            </a>
            <a href="https://www.threads.net/@muhammadwaheedaree?invite=0">
              <FaSquareThreads size={24} />
            </a>
          </div>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Muhammad Waheed. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}