import { useState, useEffect, useCallback } from "react";

// ─── Toast System ────────────────────────────────────────────────────────────

let toastIdCounter = 0;
let toastListeners = [];

function emitToast(t) {
  toastListeners.forEach((fn) => fn(t));
}

export const toast = {
  success: (title, desc = "") =>
    emitToast({ id: ++toastIdCounter, type: "success", title, desc }),
  error: (title, desc = "") =>
    emitToast({ id: ++toastIdCounter, type: "error", title, desc }),
};

function ToastItem({ toast: t, onRemove }) {
  const [removing, setRemoving] = useState(false);

  const dismiss = useCallback(() => {
    setRemoving(true);
    setTimeout(() => onRemove(t.id), 300);
  }, [t.id, onRemove]);

  useEffect(() => {
    const timer = setTimeout(dismiss, 4000);
    return () => clearTimeout(timer);
  }, [dismiss]);

  const isSuccess = t.type === "success";

  return (
    <div
      className={`
        flex items-start gap-3 w-full max-w-sm bg-white rounded-2xl p-3 pr-4
        border shadow-lg pointer-events-auto
        ${isSuccess ? "border-green-200" : "border-red-200"}
        ${removing ? "animate-toast-out" : "animate-toast-in"}
      `}
    >
      {/* Icon */}
      <div
        className={`
          w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5
          ${isSuccess ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
        `}
      >
        {isSuccess ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        )}
      </div>

      {/* Body */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 leading-snug">{t.title}</p>
        {t.desc && (
          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{t.desc}</p>
        )}
        {/* Progress bar */}
        <div className={`mt-2 h-0.5 rounded-full overflow-hidden ${isSuccess ? "bg-green-100" : "bg-red-100"}`}>
          <div
            className={`h-full rounded-full animate-toast-bar ${isSuccess ? "bg-green-500" : "bg-red-500"}`}
          />
        </div>
      </div>

      {/* Close */}
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        className="text-gray-400 hover:text-gray-700 flex-shrink-0 mt-0.5 transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}

function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const listener = (t) => setToasts((prev) => [t, ...prev]);
    toastListeners.push(listener);
    return () => {
      toastListeners = toastListeners.filter((l) => l !== listener);
    };
  }, []);

  const remove = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  if (!toasts.length) return null;

  return (
    <div className="fixed top-4 right-4 left-4 flex flex-col gap-2 z-50 pointer-events-none items-end">
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} onRemove={remove} />
      ))}
    </div>
  );
}

// ─── Field Component ─────────────────────────────────────────────────────────

function Field({ label, error, children }) {
  return (
    <div className="mb-4">
      <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
        {label}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 mt-1.5 text-xs text-red-600">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Must be exactly 10 digits";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors", "Check the highlighted fields and try again.");
      return;
    }
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    toast.success("Message sent!", "We'll get back to you as soon as possible.");
    setFormData({ fullName: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  const inputClass = (field) =>
    `w-full rounded-xl px-4 py-3 text-sm text-gray-900 bg-gray-50 border transition-all duration-150
     placeholder:text-gray-400 outline-none
     focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100
     ${errors[field] ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-100" : "border-gray-200"}`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        * { font-family: 'Plus Jakarta Sans', sans-serif; }
        @keyframes toast-in  { from { opacity: 0; transform: translateY(-8px) scale(.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes toast-out { to   { opacity: 0; transform: translateX(16px) scale(.97); } }
        @keyframes toast-bar { from { width: 100%; } to { width: 0%; } }
        @keyframes fade-up   { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin      { to   { transform: rotate(360deg); } }
        .animate-toast-in  { animation: toast-in  .3s ease forwards; }
        .animate-toast-out { animation: toast-out .3s ease forwards; }
        .animate-toast-bar { animation: toast-bar 4s linear forwards; }
        .animate-fade-up   { animation: fade-up   .4s ease forwards; }
        .animate-spin-svg  { animation: spin .7s linear infinite; }
      `}</style>

      <ToastContainer />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/60 p-6 sm:p-8 animate-fade-up">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-7">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Contact us</h1>
            <p className="text-sm text-gray-500 mt-1">
              Fill out the form and we'll get back to you soon.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            <Field label="Full name" error={errors.fullName}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={inputClass("fullName")}
              />
            </Field>

            <Field label="Email" error={errors.email}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className={inputClass("email")}
              />
            </Field>

            <Field label="Phone number" error={errors.phone}>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit phone number"
                maxLength={10}
                className={inputClass("phone")}
              />
            </Field>

            <Field label="Message" error={errors.message}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={4}
                className={`${inputClass("message")} resize-y min-h-[110px]`}
              />
            </Field>

            <button
              type="submit"
              disabled={loading}
              className={`
                w-full mt-2 py-3.5 rounded-xl text-sm font-semibold text-white
                flex items-center justify-center gap-2 transition-all duration-200
                active:scale-[0.98]
                ${loading
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 cursor-pointer shadow-md shadow-blue-200"}
              `}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin-svg"
                    width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}