import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Registration.scss";

function Registration() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("⚠️ Passwords do not match!");
      return;
    }

    try {
      // Auto-Reply to user
      await emailjs.sendForm(
        "service_mu5p289",
        "template_t9v1t35",
        formRef.current,
        "M_yyaRyR_lDAPnjUB"
      );

      // Admin Notification
      await emailjs.send(
        "service_mu5p289",
        "template_admin_notify",
        {
          name: form.name,
          email: form.email,
        },
        "M_yyaRyR_lDAPnjUB"
      );

      alert("❌ Error sending form.");
      setForm({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("✅ Registration Successfully. Our team will revert soon!");
    }
  };

  return (
    <div className="registration">
      <h2>User Registration</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={(e) =>
            setForm({ ...form, confirmPassword: e.target.value })
          }
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
