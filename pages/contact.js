import React, { useRef, useState } from "react";
import Footer from "../components/Footer";
import { Space_Grotesk } from 'next/font/google';
import ReCAPTCHA from "react-google-recaptcha";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const recaptchaValue = recaptchaRef.current.getValue();
      
      const response = await fetch("https://formspree.io/f/xrbpeqdn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          message: e.target.message.value,
          'g-recaptcha-response': recaptchaValue,
          _subject: "New Contact Form Submission",
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
        recaptchaRef.current.reset();
      } else {
        const data = await response.json();
        console.error('Form submission error:', data);
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-background-light text-black">
      <Footer />
      <div className="flex flex-col items-center justify-center text-center px-8 pt-16 pb-32">
        <div className="max-w-2xl text-left space-y-8">
          <div className="space-y-6">
            <h1 className={`text-4xl font-bold mb-8 ${spaceGrotesk.className}`}>
              Contact Me
            </h1>
            
            <p className="text-lg leading-relaxed">
              I'm open to <span className="font-bold">collaborations, partnerships, and discussions</span> in the areas of{' '}
              <span className="font-bold">AI, wearables, motion tracking, biomechanics, and nutrition.</span>{' '}
              If you're working on something exciting, feel free to reach out!
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 mt-8"
            >
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Your email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Your message:
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  theme="light"
                  onErrored={() => console.error('reCAPTCHA error:', process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)}
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="px-6 py-2 bg-accent text-white rounded-md hover:bg-accent-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send'}
                </button>
              </div>

              {formStatus === 'success' && (
                <p className="text-green-600 text-center">
                  Thank you for your message! I'll get back to you soon.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-center">
                  Sorry, there was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}