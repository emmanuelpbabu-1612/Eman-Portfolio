import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string; // spam protection
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.honeypot) {
      return; // Silent fail for bots
    }

    // Rate limiting - 60 seconds between submissions
    const now = Date.now();
    if (now - lastSubmitTime < 60000) {
      setStatus({
        type: 'error',
        message: 'Please wait before sending another message.',
      });
      return;
    }

    // Validate form
    if (!validateForm()) {
      return;
    }

    setStatus({ type: 'loading', message: '' });

    try {
      // EmailJS configuration - these will be environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Email service not configured');
      }

      // Prepare email template params
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'emmanuelpbabu@gmail.com',
        timestamp: new Date().toLocaleString(),
      };

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Success
      setStatus({
        type: 'success',
        message: "Message transmitted successfully. I'll get back to you soon.",
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        message: '',
        honeypot: '',
      });

      // Update last submit time
      setLastSubmitTime(now);

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    } catch (error) {
      console.error('Email send error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email directly.',
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="relative p-8 bg-white/[0.02] border border-white/10">
      <h3 className="font-futuristic text-[10px] tracking-[0.3em] uppercase text-white/40 mb-8">
        Send Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={formData.name}
            onChange={handleChange}
            disabled={status.type === 'loading'}
            className={`w-full px-4 py-3 bg-black border ${
              errors.name ? 'border-red-500/50' : 'border-white/10'
            } text-white text-xs tracking-widest placeholder:text-white/20 focus:border-white/40 focus:outline-none transition-colors font-mono disabled:opacity-50`}
          />
          {errors.name && (
            <p className="mt-2 text-[10px] text-red-400/80 tracking-wider">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            disabled={status.type === 'loading'}
            className={`w-full px-4 py-3 bg-black border ${
              errors.email ? 'border-red-500/50' : 'border-white/10'
            } text-white text-xs tracking-widest placeholder:text-white/20 focus:border-white/40 focus:outline-none transition-colors font-mono disabled:opacity-50`}
          />
          {errors.email && (
            <p className="mt-2 text-[10px] text-red-400/80 tracking-wider">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            rows={5}
            placeholder="MESSAGE"
            value={formData.message}
            onChange={handleChange}
            disabled={status.type === 'loading'}
            className={`w-full px-4 py-3 bg-black border ${
              errors.message ? 'border-red-500/50' : 'border-white/10'
            } text-white text-xs tracking-widest placeholder:text-white/20 focus:border-white/40 focus:outline-none transition-colors resize-none font-mono disabled:opacity-50`}
          />
          {errors.message && (
            <p className="mt-2 text-[10px] text-red-400/80 tracking-wider">
              {errors.message}
            </p>
          )}
        </div>

        {/* Status Messages */}
        {status.type === 'success' && (
          <div className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 text-xs tracking-wider">
            {status.message}
          </div>
        )}

        {status.type === 'error' && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs tracking-wider">
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={status.type === 'loading'}
          className={`w-full px-8 py-4 ${
            status.type === 'loading'
              ? 'bg-white/50 cursor-not-allowed'
              : 'bg-white hover:bg-white/90'
          } text-black font-futuristic text-[10px] tracking-[0.3em] uppercase transition-all flex items-center justify-center gap-4 group`}
        >
          {status.type === 'loading' ? (
            <>
              <span className="inline-block w-3 h-3 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              Transmitting...
            </>
          ) : (
            <>
              Transmit
              <ArrowRight
                size={14}
                className="group-hover:translate-x-2 transition-transform"
              />
            </>
          )}
        </button>
      </form>
    </div>
  );
};
