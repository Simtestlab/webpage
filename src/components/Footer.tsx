import React, { useState, type ChangeEvent } from 'react';

const Footer = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<{ type: 'idle' | 'sending' | 'success' | 'error'; msg?: string }>({ type: 'idle' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'sending' });

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      console.log("Response:", res);

      if (res.ok) {
        setStatus({ type: 'success', msg: 'Message sent — we will contact you shortly.' });
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus({ type: 'error', msg: data?.error || 'Error sending message' });
      }
    } catch (err) {
      setStatus({ type: 'error', msg: 'Network error. Please try again later.' });
    }
  };

  return (
  <footer className="bg-background scroll-mt-12 md:scroll-mt-17" id="contact">
      {/* CTA Section */}
      <section className="py-8 md:py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Let's Build the Future of Energy. Together.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're developing a new product, scaling your energy infrastructure, or building a more sustainable supply chain, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="bg-background/60 border border-border rounded-lg shadow-sm -mt-6 md:-mt-8 mb-4 md:mb-6 overflow-hidden max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex justify-center">
          {/* Contact Form */}
          <div className="bg-background p-4 md:p-6 lg:p-8 w-full max-w-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">Get In Touch</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                required
                className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              />

              {status.type === 'success' && (
                <p className="text-sm text-green-600">{status.msg}</p>
              )}
              {status.type === 'error' && (
                <p className="text-sm text-destructive">{status.msg}</p>
              )}

              <button
                type="submit"
                disabled={status.type === 'sending'}
                className={`w-full ${status.type === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-muted/80'} bg-muted text-foreground py-3 px-6 rounded-md transition-colors font-medium`}
              >
                {status.type === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Branch Information */}
      <div className="bg-foreground text-background py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {/* Sweden Branch */}
            <div className="flex flex-col items-start text-left max-w-sm w-full">
              <h4 className="text-lg font-semibold mb-3 md:mb-4 text-background">Main Branch</h4>
              <div className="space-y-1.5 md:space-y-2 text-sm text-background">
                <p><strong>Simtestlab Sweden AB</strong></p>
                <p>Org nr: 559386-6055</p>
                <p>VAT Number: SE559386605501</p>
                <p>SWEDEN (HQ) - Sprintergången 7</p>
                <p>support@simtestlab.se</p>
                <p>+46 76 976 82 63</p>
                <p>Copyright 2025. All Rights Reserved.</p>
              </div>
            </div>
            {/* India Branch */}
            <div className="flex flex-col items-start text-left max-w-sm w-full">
              <h4 className="text-lg font-semibold mb-3 md:mb-4 text-background">India Branch</h4>
              <div className="space-y-1.5 md:space-y-2 text-sm text-background">
                <p>iGraph Technologies Pvt Ltd</p>
                <p>Masagoundenchettipálayam Coimbatore</p>
                <p>Tamil Nadu, India - 641 107</p>
                <p>support@simtestlab.se</p>
                <p>+91 95976 61235</p>
                <p>GSTIN: 33AAHCI0407BF1ZQ</p>
              </div>
            </div>

            {/* Battery Lab Facility */}
            <div className="flex flex-col items-start text-left max-w-sm w-full">
              <h4 className="text-lg font-semibold mb-3 md:mb-4 text-background">Battery Lab Facility</h4>
              <div className="space-y-1.5 md:space-y-2 text-sm text-background">
                <p>iGraph Technologies Pvt Ltd</p>
                <p>Kolapalli, Cherangode, The Nilgiris</p>
                <p>Tamil Nadu, India - 643 253</p>
                <p>support@simtestlab.se</p>
                <p>+91 95976 61235</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;