import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

export default function Home() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="welcome-badge">
              Welcome
            </span>
            <h1 className="hero-title">I&apos;m Developer</h1>
            <p className="hero-description">
              Experienced frontend developer with a passion for creating
              visually stunning and user-friendly websites
            </p>
            <div className="button-group">
              <button className="button button-primary">
                Hire Me
              </button>
              <button className="button button-secondary">
                Download CV
              </button>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/image.png"
              alt="Developer"
              width={320}
              height={320}
              className="profile-image"
            />
          </div>
        </div>
      </div>
      <div className="social-links">
        <a href="https://github.com/muhammadwaheedaree" className="social-link">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/muhammadwaheedaree/" className="social-link">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:m128waheed@gmail.com" className="social-link">
          <TfiEmail size={24} />
        </a>
        <a href="https://www.threads.net/@muhammadwaheedaree?invite=0" className="social-link">
          <FaSquareThreads size={24} />
        </a>
      </div>
    </div>
  );
}