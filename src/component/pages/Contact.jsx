import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitMessage, setSubmitMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Auto-reply to user
      await emailjs.sendForm(
        "service_mu5p289",
        "template_t9v1t35", // Your user template
        formRef.current,
        "M_yyaRyR_lDAPnjUB"
      );

      // Admin notification
      await emailjs.send(
        "service_mu5p289",
        "template_admin_notify", // Your admin template
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "M_yyaRyR_lDAPnjUB"
      );

      setSubmitMessage("❌ Error sending form.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitMessage("✅ Thanks! Your message has been sent successfully.");
    }

    setLoading(false);
    setTimeout(() => setSubmitMessage(""), 5000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Fill out the form below.</p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>📍 Address</h3>
            <p>Dsp Office, Navapara, Bhavnagar, Gujarat</p>

            <h3>📞 Phone</h3>
            <p>+91 7777990719</p>

            <h3>✉️ Email</h3>
            <p>brijeshparmar5074@gmail.com</p>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                required
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
              />
              <label>Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                required
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
              />
              <label>Email</label>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                required
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label>Message</label>
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Submit Form"}
            </button>
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
          </form>
        </div>

        <div className="map-embed-container">
          <h3>📍 Visit Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7410.599449865026!2d72.1453043916213!3d21.768657954907095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5a7b15e2da99%3A0x52db81867e4b76f5!2sParmar%20Wooden%20%26%20Fiber%20Gallery!5e0!3m2!1sen!2sin!4v1750577357570!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
