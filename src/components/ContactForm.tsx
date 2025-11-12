import { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };


const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send(
      'service_ij7013n',
      'template_8084kwd',
      formData,
      '4EJaRCqUMdVaBQpJ2'
    )
    .then((result) => {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 3000);
    })
    .catch((error) => {
      alert('Failed to send message. Please try again.');
      console.error(error);
    });
};

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

      {submitted ? (
        <div className="bg-green-900/20 border border-green-500/50 text-green-300 p-4 rounded-lg text-center">
          Thank you for your message! I'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-colors"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-colors"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-colors resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-amber-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-300 transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
