import { useState } from 'react';
import './index.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    projectType: 'Custom Web App',
    description: '',
    features: {
      login: false,
      admin: false,
      payment: false,
      api: false,
    },
    otherFeatures: '',
    budget: '',
    timeline: '',
  });

  const [status, setStatus] = useState({ loading: false, message: '', error: false });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        features: {
          ...prev.features,
          [name]: checked
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', error: false });
    try {
      const res = await fetch('/api/submit.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ loading: false, message: 'Request saved and email sent!', error: false });
        setFormData({
          fullName: '',
          email: '',
          contact: '',
          projectType: 'Custom Web App',
          description: '',
          features: { login: false, admin: false, payment: false, api: false },
          otherFeatures: '',
          budget: '',
          timeline: '',
        });
      } else {
        setStatus({ loading: false, message: data.message || 'Error submitting request.', error: true });
      }
    } catch (err) {
      setStatus({ loading: false, message: 'Failed to connect to server.', error: true });
    }
  };

  return (
    <div className="font-body-md bg-surface-container-lowest">
      {/* TopNavBar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 h-20 w-full bg-[#171717]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(99,102,241,0.05)] font-manrope tracking-tight">
        <div className="text-lg md:text-xl font-bold tracking-tighter text-white flex items-center gap-2">
          <img alt="CipherForge Logo" className="h-7 md:h-8 w-auto mr-1" src="https://lh3.googleusercontent.com/aida/ADBb0uicfslIfpLZ87OHbttLFwavKtvYapR9AjMmPD4nCrxmh1yQhKW75EglhgZ3Otr4HI-Fao0udAb35_C93t4emWeA7GX1EUjXXiRNwqQgFIQN8t6jAxu8Ipz1lXJc5wXP7OkPciGYX1wKLmwVqdi_n2ppwBik6JnIRc68nN_GlXlf83KomsSVu6CaOXhE-GpVWkdCgl_WCWrsDZ8UTxQedZSdyXSs805cpocxkd6ZcuAKoe128-_T_eJxVuXBQBq1oY68yWZcZItg84U"/>
          CipherForge
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Portfolio</a>
          <a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Services</a>
          <a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Architecture</a>
          <a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-[#6366f1] text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-all active:scale-95 duration-150 text-sm">Start Request</button>
          <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden reveal-fade">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#6366f115_0%,_transparent_70%)] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#818cf8] text-xs font-bold mb-6 reveal-down stagger-1">
              <span className="w-2 h-2 bg-[#6366f1] rounded-full animate-pulse"></span>
              Now Accepting New Projects
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-8 leading-[0.9] reveal-up stagger-2">
              Architecting Your <br />
              <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">Digital Future</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed reveal-up stagger-3">
              Elite custom software development and secure system architecture. 
              Transforming complex requirements into high-performance digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-up stagger-4">
              <a className="w-full sm:w-auto bg-[#6366f1] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all" href="#request-form">
                Start Request
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto reveal-fade stagger-2" id="request-form">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Guidance */}
            <div className="lg:col-span-4 space-y-8 reveal-up stagger-3">
              <div className="p-6 glass-panel rounded-2xl">
                <h3 className="font-headline-md text-[24px] leading-[32px] font-semibold text-white mb-4">Our Process</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-xs font-bold text-[#6366f1] border border-white/5">01</div>
                    <div>
                      <p className="text-white font-medium text-sm">Requirement Analysis</p>
                      <p className="text-[11px] text-zinc-500 uppercase tracking-wider font-bold mt-1">SECURE PROTOCOL 1.0</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-xs font-bold text-[#6366f1] border border-white/5">02</div>
                    <div>
                      <p className="text-white font-medium text-sm">Architecture Design</p>
                      <p className="text-[11px] text-zinc-500 uppercase tracking-wider font-bold mt-1">BLUEPRINT GENERATION</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-6 glass-panel rounded-2xl border-l-4 border-[#6366f1]">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#6366f1]" style={{ fontVariationSettings: '"FILL" 1' }}>security</span>
                  <div>
                    <h4 className="text-white font-bold text-xs mb-1 uppercase tracking-widest">SECURITY NOTE</h4>
                    <p className="text-[13px] text-zinc-400 leading-relaxed">
                      All systems are built with zero-trust architecture and encrypted data handling as standard.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-8 reveal-up stagger-4">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="p-6 md:p-8 glass-panel rounded-3xl shadow-xl space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-zinc-500">person</span>
                    <h2 className="text-lg font-bold text-white tracking-tight">CLIENT INFO</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input className="bg-[#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6366f1] outline-none text-sm" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" type="text" required />
                    <input className="bg-[#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6366f1] outline-none text-sm" name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" required />
                  </div>
                  <input className="w-full bg-[#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6366f1] outline-none text-sm" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Number" type="tel" required />
                  
                  <div className="pt-4 flex items-center gap-3 mb-4 border-t border-white/5">
                    <span className="material-symbols-outlined text-zinc-500">assignment</span>
                    <h2 className="text-lg font-bold text-white tracking-tight">PROJECT DETAILS</h2>
                  </div>
                  <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-[#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6366f1] outline-none text-sm">
                    <option>Portfolio</option>
                    <option>Business System</option>
                    <option>Custom Web App</option>
                  </select>
                  <textarea className="w-full bg-[#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6366f1] outline-none text-sm" name="description" value={formData.description} onChange={handleChange} placeholder="Describe your project requirements..." rows={4} required></textarea>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-widest text-[#6366f1]">Budget Range</h3>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-4 h-4 border-white/10 bg-transparent text-[#6366f1]" name="budget" type="radio" value="1k-5k" checked={formData.budget === '1k-5k'} onChange={handleChange} required />
                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">₱1,000 – ₱5,000</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-4 h-4 border-white/10 bg-transparent text-[#6366f1]" name="budget" type="radio" value="5k-10k" checked={formData.budget === '5k-10k'} onChange={handleChange} required />
                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">₱5,000 – ₱10,000</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-4 h-4 border-white/10 bg-transparent text-[#6366f1]" name="budget" type="radio" value="10k+" checked={formData.budget === '10k+'} onChange={handleChange} required />
                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">₱10,000+</span>
                      </label>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-widest text-[#6366f1]">Timeline</h3>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-4 h-4 border-white/10 bg-transparent text-[#6366f1]" name="timeline" type="radio" value="ASAP" checked={formData.timeline === 'ASAP'} onChange={handleChange} required />
                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">ASAP</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-4 h-4 border-white/10 bg-transparent text-[#6366f1]" name="timeline" type="radio" value="1-2 weeks" checked={formData.timeline === '1-2 weeks'} onChange={handleChange} required />
                        <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">1–2 Weeks</span>
                      </label>
                    </div>
                  </div>

                  <button className="w-full bg-[#6366f1] text-white py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all active:scale-95" type="submit" disabled={status.loading}>
                    {status.loading ? 'Forging System...' : 'Submit Request'}
                  </button>
                  {status.message && <div className={`p-4 rounded-xl text-center text-sm ${status.error ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>{status.message}</div>}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-16 px-8 border-t border-white/5 bg-[#0a0a0a] text-center text-zinc-500 text-sm">
        © 2026 CipherForge Security Systems
      </footer>
    </div>
  );
}

export default App;
