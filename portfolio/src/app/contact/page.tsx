import { Mail, Phone } from "lucide-react";
import Footer from "@/app/components/footer";

export default function Contact() {
  return (
    <>
      <div className="contact-section">
        <div className="container">
          <h2 className="section-title">Get in touch</h2>
          <p className="contact-subtitle">
            Do you have a project in your mind, contact me here
          </p>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Find Me</h3>
              <div className="contact-method">
                <Mail className="h-5 w-5" />
                <p>Email: m128waheed@gmail.com</p>
              </div>
              <div className="contact-method">
                <Phone className="h-5 w-5" />
                <p>Tel: +923 238 293 672</p>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-input"
                  aria-label="Name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                  aria-label="Email"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={5}
                className="form-textarea"
                aria-label="Message"
              ></textarea>
              <button
                type="submit"
                className="submit-button"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}