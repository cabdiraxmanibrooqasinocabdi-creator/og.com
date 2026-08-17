import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Globe, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  Mail, 
  Send, 
  HelpCircle, 
  ChevronDown, 
  Building2, 
  Cpu, 
  TrendingUp, 
  Award,
  Copy,
  Check,
  User,
  DollarSign
} from 'lucide-react';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showOfferModal, setShowOfferModal] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('OGADENIA.COM');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !budget) return;

    setIsSubmitting(true);
    const recipient = 'cabdiraxmanibrooqasinocabdi@gmail.com';

    try {
      // Send directly to your email inbox via FormSubmit API
      await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Domain Budget Proposal for OGADENIA.COM ($${budget})`,
          Domain: 'OGADENIA.COM',
          'Proposed Budget ($)': `$${budget}`,
          'Buyer Name': name || 'Not provided',
          'Buyer Email': email,
          'Message / Details': message || 'No message provided'
        })
      });
    } catch (err) {
      // Fallback: Open Mail Client
      const subject = encodeURIComponent(`Domain Budget Proposal for OGADENIA.COM ($${budget})`);
      const bodyContent = encodeURIComponent(
        `Hello,\n\nI am interested in acquiring the domain OGADENIA.COM.\n\n` +
        `Proposed Budget: $${budget}\n` +
        `Name: ${name || 'N/A'}\n` +
        `Email: ${email}\n\n` +
        `Additional Details / Message:\n${message || 'No additional details provided.'}\n`
      );
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${bodyContent}`;
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setShowOfferModal(false);
        setName('');
        setEmail('');
        setBudget('');
        setMessage('');
      }, 5000);
    }
  };


  const faqs = [
    {
      q: "How does the budget proposal process work?",
      a: "You submit your proposed budget along with your contact details. We evaluate all inquiries individually and respond directly via email to discuss transfer arrangements."
    },
    {
      q: "Is escrow service supported for the transaction?",
      a: "Yes! Once a budget is agreed upon, we accept payment via trusted escrow platforms (such as Escrow.com or Dan.com) for 100% buyer protection."
    },
    {
      q: "How fast will I receive ownership of OGADENIA.COM?",
      a: "Upon completing payment, ownership transfer (via EPP Authorization Code or registrar push) is processed within 1 to 24 hours."
    },
    {
      q: "Are there any recurring costs after purchase?",
      a: "No, you only pay standard annual domain registration renewal fees to your chosen registrar."
    }
  ];

  const highlights = [
    {
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      title: "Premium .COM TLD",
      desc: "The gold standard extension trusted globally for maximum authority, recall, and SEO value."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
      title: "Flexible Budget Proposal",
      desc: "No fixed price. State your budget directly to negotiate a deal that fits your organization."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "100% Escrow Protected",
      desc: "Transactions can be completed through verified escrow partners prior to domain transfer."
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      title: "Instant Transfer Ready",
      desc: "Fully unlocked domain ready for immediate authorization code transfer."
    }
  ];

  const useCases = [
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      title: "Tech & AI Platform",
      desc: "Ideal brand name for software products, AI services, and SaaS applications."
    },
    {
      icon: <Building2 className="w-5 h-5 text-emerald-400" />,
      title: "Enterprise & Commerce",
      desc: "Strong digital identity for regional commerce, enterprise solutions, or finance."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      title: "Media & Digital Hub",
      desc: "High recall domain suited for news, community portals, or content networks."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050807] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black">
      {/* Background Flag Image & Atmospheric Overlay */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 filter saturate-125 brightness-90 scale-105" 
          style={{ backgroundImage: "url('/flag-waving.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050807]/80 via-[#050807]/90 to-[#050807]"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header / Navbar */}
      <header className="relative z-10 border-b border-emerald-900/30 backdrop-blur-md bg-[#050807]/80">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 p-[1px]">
              <div className="w-full h-full bg-[#050807] rounded-[11px] flex items-center justify-center">
                <Globe className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              OGADENIA<span className="text-emerald-400">.COM</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2"></span>
              Accepting Budget Offers
            </span>
            <button
              onClick={() => setShowOfferModal(true)}
              className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              Submit Your Budget
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-24 px-6 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-8">
          <Award className="w-4 h-4 text-emerald-400" />
          <span>Premium .COM Domain — Name Your Price</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          Own <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">OGADENIA.COM</span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg mb-10 leading-relaxed">
          This premium domain name is open for private acquisition. Submit your proposed budget directly to the owner to start negotiations.
        </p>

        {/* Flag Image Card */}
        <div className="max-w-2xl mx-auto mb-12 overflow-hidden rounded-2xl border border-emerald-500/30 shadow-2xl relative group">
          <img 
            src="/flag-waving.jpg" 
            alt="Ogaden Flag Waving" 
            className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d0b] via-[#090d0b]/40 to-transparent flex items-end p-6">
            <div className="text-left flex flex-col sm:flex-row items-start sm:items-end justify-between w-full gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded border border-emerald-500/30">
                  Official Domain Asset
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 font-display tracking-wider">
                  OGADENIA<span className="text-emerald-400">.COM</span>
                </h2>
              </div>
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs font-medium text-slate-200 flex items-center space-x-1.5 transition-colors border border-slate-700"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Domain'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Budget Submission Card */}
        <div className="max-w-2xl mx-auto mb-16 p-8 rounded-2xl bg-[#090d0b]/90 border border-emerald-500/30 backdrop-blur-xl shadow-2xl text-left">
          <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white">Propose Your Acquisition Budget</h3>
              <p className="text-xs text-slate-400">Specify your budget and send your proposal directly via email</p>
            </div>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Proposal Prepared & Sent!</h4>
              <p className="text-slate-300 text-sm">Your email client has opened with your budget details. We will respond promptly!</p>
            </div>
          ) : (
            <form onSubmit={handleSendEmail} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Proposed Budget ($ USD) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-slate-400 font-semibold text-sm">$</span>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 1000"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 pl-8 pr-4 text-white focus:border-emerald-500 focus:outline-none font-bold text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:border-emerald-500 focus:outline-none text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Your Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:border-emerald-500 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Message / Details (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about your intended project or timeline..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-emerald-500 focus:outline-none text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold text-base transition-all duration-200 shadow-lg shadow-emerald-500/25 flex items-center justify-center space-x-2 active:scale-98 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending Proposal...' : 'Send Email Offer with Budget'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {highlights.map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm group">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Domain Value & Use Cases */}
      <section className="relative z-10 py-20 bg-slate-950/60 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ideal Business Applications</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A high-value brand asset designed to establish trust, recall, and market positioning across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#090d0b] border border-emerald-900/30 hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6">
                  {uc.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{uc.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{uc.desc}</p>
                <div className="flex items-center text-xs font-semibold text-emerald-400 space-x-1">
                  <span>High Commercial Potential</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transfer Steps */}
      <section className="relative z-10 py-20 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Simple 3-Step Ownership Transfer</h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Safe, verified, and hassle-free domain transfer process guaranteed upon agreement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative p-6 rounded-xl bg-slate-900/30 border border-slate-800">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center mb-4 text-sm">1</div>
            <h3 className="font-display text-lg font-bold text-white mb-2">Submit Budget Proposal</h3>
            <p className="text-slate-400 text-sm">Fill out the proposal form with your custom budget and contact details.</p>
          </div>

          <div className="relative p-6 rounded-xl bg-slate-900/30 border border-slate-800">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center mb-4 text-sm">2</div>
            <h3 className="font-display text-lg font-bold text-white mb-2">Agree & Secure Payment</h3>
            <p className="text-slate-400 text-sm">Once agreed, payment is processed securely via Escrow.com or Dan.com for full protection.</p>
          </div>

          <div className="relative p-6 rounded-xl bg-slate-900/30 border border-slate-800">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center mb-4 text-sm">3</div>
            <h3 className="font-display text-lg font-bold text-white mb-2">Domain Ownership Transfer</h3>
            <p className="text-slate-400 text-sm">Receive the domain authorization EPP key or direct push transfer to your registrar.</p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="relative z-10 py-20 bg-slate-950/40 border-t border-slate-800/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 text-emerald-400 text-sm font-semibold mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center text-white font-semibold text-base focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180 text-emerald-400' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/40 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Modal */}
      {showOfferModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0a0f0d] border border-emerald-500/30 p-8 shadow-2xl">
            <button
              onClick={() => setShowOfferModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Lock className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">Submit Budget Proposal</h3>
                <p className="text-xs text-slate-400">Directly email your budget proposal to the domain owner</p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Proposal Sent!</h4>
                <p className="text-slate-300 text-sm">Your email program has opened. We look forward to reviewing your budget.</p>
              </div>
            ) : (
              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Proposed Budget ($ USD) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-slate-400 font-semibold">$</span>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 1000"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 pl-8 pr-4 text-white focus:border-emerald-500 focus:outline-none font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 px-4 text-white focus:border-emerald-500 focus:outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="your.email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:border-emerald-500 focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Message / Preferred Escrow (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Include any specific details or questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-emerald-500 focus:outline-none text-sm"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold text-sm transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Email Proposal</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/60 py-12 bg-[#030504]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <Globe className="w-5 h-5 text-emerald-400" />
            <span className="font-display font-bold text-lg text-white">OGADENIA.COM</span>
          </div>

          <div className="text-slate-500 text-xs text-center md:text-right">
            <p>© {new Date().getFullYear()} OGADENIA.COM. All rights reserved.</p>
            <p className="mt-1">Direct contact: <a href="mailto:cabdiraxmanibrooqasinocabdi@gmail.com" className="text-emerald-400 hover:underline">cabdiraxmanibrooqasinocabdi@gmail.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
