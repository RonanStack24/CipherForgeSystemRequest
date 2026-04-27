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
        setStatus({ loading: false, message: 'Request submitted successfully!', error: false });
        setFormData({
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
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Portfolio</a>
          <a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Services</a>
          <a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Architecture</a>
          <a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-[#6366f1] text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-all active:scale-95 duration-150 text-sm">
            Start Request
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#171717] border-b border-white/5 lg:hidden animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-6 gap-4">
              <a className="text-zinc-400 hover:text-white transition-colors py-2 border-b border-white/5" href="#" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a className="text-zinc-400 hover:text-white transition-colors py-2 border-b border-white/5" href="#" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a className="text-zinc-400 hover:text-white transition-colors py-2 border-b border-white/5" href="#" onClick={() => setIsMenuOpen(false)}>Architecture</a>
              <a className="text-zinc-400 hover:text-white transition-colors py-2 border-b border-white/5" href="#" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <button className="sm:hidden bg-[#6366f1] text-white px-5 py-3 rounded-lg font-semibold w-full mt-2" onClick={() => setIsMenuOpen(false)}>
                Start Request
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 px-6 md:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#6366f1]/5 to-transparent pointer-events-none"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#6366f1] text-[10px] sm:text-sm font-medium mb-6">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>verified_user</span>
              Security-Focused Development
            </div>
            <div className="text-[9px] md:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4 mt-2">
              WE BUILD SECURE SYSTEMS FROM THE GROUND UP
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-[-0.02em] font-extrabold text-white mb-6 leading-tight">
              Request a <span className="text-[#6366f1]">Custom Web</span> Application
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Tell us your idea and we will build a secure, scalable system for you. Precision engineered for high-performance enterprise needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a className="w-full sm:w-auto bg-[#6366f1] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all" href="#request-form">
                Start Request
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto" id="request-form">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Guidance */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-6 glass-panel rounded-2xl">
                <h3 className="font-headline-md text-[24px] leading-[32px] font-semibold text-white mb-4">Our Process</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-xs font-bold text-[#6366f1] border border-white/5">01</div>
                    <div>
                      <p className="text-white font-medium">Requirement Analysis</p>
                      <p className="text-sm text-zinc-500">We analyze your specific needs and security vectors.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-xs font-bold text-[#6366f1] border border-white/5">02</div>
                    <div>
                      <p className="text-white font-medium">System Architecture</p>
                      <p className="text-sm text-zinc-500">Detailed design using secure-by-default patterns.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-xs font-bold text-[#6366f1] border border-white/5">03</div>
                    <div>
                      <p className="text-white font-medium">Rapid Deployment</p>
                      <p className="text-sm text-zinc-500">Continuous integration with automated testing.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-6 glass-panel rounded-2xl border-l-4 border-[#6366f1]">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#6366f1]" style={{ fontVariationSettings: '"FILL" 1' }}>security</span>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">SECURITY NOTE</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      All projects are built following security best practices inspired by OWASP. Data encryption and secure auth are standard.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-48 border border-white/5">
                <img alt="Server hardware" className="w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGv__ksxQ3nSvwHRkluRPWmNcCsk_a814gEjzk2TDmQUDv0d4di8CilPsMnQYoQsnPw9WKxLz1r-RyqjCZ_1UPIvj4DnwcUc30QRpTcHZuRqaE-4Va2ZJ1M_uVOPclnM0n7rOvKqFtKoMuBjoWRh-PfmLnTURRLYw1sc0sGTdG_vLv5EJzXSfSJdS1zf7ir_OjlVcKp6OpShkW-q3v10S8UQXm_oi0SnRr1olk118Y39EgsaNDS9Vcir_-xo9Hf-5ou0ofQl3TgMKg" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* CLIENT INFO */}
                <div className="p-6 md:p-8 glass-panel rounded-3xl shadow-xl">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <span className="material-symbols-outlined text-zinc-500">person</span>
                    <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">CLIENT INFO</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400 ml-1">Full Name</label>
                      <input 
                        className="w-full bg-[#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all outline-none" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        type="text" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400 ml-1">Email</label>
                      <input 
                        className="w-full bg-[#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all outline-none" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        type="email" 
                        required
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-zinc-400 ml-1">Contact Number</label>
                      <input 
                        className="w-full bg-[#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all outline-none" 
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="+63 900 000 0000" 
                        type="tel" 
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* PROJECT DETAILS */}
                <div className="p-6 md:p-8 glass-panel rounded-3xl shadow-xl">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <span className="material-symbols-outlined text-zinc-500">assignment</span>
                    <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">PROJECT DETAILS</h2>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400 ml-1">Project Type</label>
                      <select 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-[#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all outline-none appearance-none"
                      >
                        <option>Portfolio</option>
                        <option>E-commerce</option>
                        <option>Business System</option>
                        <option>Custom Web App</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400 ml-1">Project Description</label>
                      <textarea 
                        className="w-full bg-[#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all outline-none" 
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe the core logic and user flow..." 
                        rows={4}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* FEATURES */}
                <div className="p-6 md:p-8 glass-panel rounded-3xl shadow-xl">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <span className="material-symbols-outlined text-zinc-500">featured_play_list</span>
                    <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">FEATURES</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <label className="flex items-center gap-3 p-4 rounded-xl bg-[#090909] border border-white/5 cursor-pointer hover:border-[#6366f1]/40 transition-colors">
                      <input 
                        className="w-5 h-5 rounded border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0 focus:ring-[#6366f1]" 
                        type="checkbox" 
                        name="login"
                        checked={formData.features.login}
                        onChange={handleChange}
                      />
                      <span className="text-zinc-300">Login System</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 rounded-xl bg-[#090909] border border-white/5 cursor-pointer hover:border-[#6366f1]/40 transition-colors">
                      <input 
                        className="w-5 h-5 rounded border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0 focus:ring-[#6366f1]" 
                        type="checkbox" 
                        name="admin"
                        checked={formData.features.admin}
                        onChange={handleChange}
                      />
                      <span className="text-zinc-300">Admin Dashboard</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 rounded-xl bg-[#090909] border border-white/5 cursor-pointer hover:border-[#6366f1]/40 transition-colors">
                      <input 
                        className="w-5 h-5 rounded border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0 focus:ring-[#6366f1]" 
                        type="checkbox" 
                        name="payment"
                        checked={formData.features.payment}
                        onChange={handleChange}
                      />
                      <span className="text-zinc-300">Payment Integration</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 rounded-xl bg-[#090909] border border-white/5 cursor-pointer hover:border-[#6366f1]/40 transition-colors">
                      <input 
                        className="w-5 h-5 rounded border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0 focus:ring-[#6366f1]" 
                        type="checkbox" 
                        name="api"
                        checked={formData.features.api}
                        onChange={handleChange}
                      />
                      <span className="text-zinc-300">API Integration</span>
                    </label>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400 ml-1">Other Features</label>
                    <input 
                      className="w-full bg-[#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all outline-none" 
                      name="otherFeatures"
                      value={formData.otherFeatures}
                      onChange={handleChange}
                      placeholder="Explain other specific requirements..." 
                      type="text" 
                    />
                  </div>
                </div>

                {/* BUDGET & TIMELINE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 md:p-8 glass-panel rounded-3xl shadow-xl">
                    <h2 className="text-base md:text-lg font-bold text-white mb-6">BUDGET</h2>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input 
                          className="w-5 h-5 border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0" 
                          name="budget" 
                          type="radio" 
                          value="1k-5k"
                          checked={formData.budget === '1k-5k'}
                          onChange={handleChange}
                          required
                        />
                        <span className="text-sm md:text-base text-zinc-300">₱1,000 – ₱5,000</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input 
                          className="w-5 h-5 border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0" 
                          name="budget" 
                          type="radio" 
                          value="5k-10k"
                          checked={formData.budget === '5k-10k'}
                          onChange={handleChange}
                          required
                        />
                        <span className="text-sm md:text-base text-zinc-300">₱5,000 – ₱10,000</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input 
                          className="w-5 h-5 border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0" 
                          name="budget" 
                          type="radio" 
                          value="10k+"
                          checked={formData.budget === '10k+'}
                          onChange={handleChange}
                          required
                        />
                        <span className="text-sm md:text-base text-zinc-300">₱10,000+</span>
                      </label>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 glass-panel rounded-3xl shadow-xl">
                    <h2 className="text-base md:text-lg font-bold text-white mb-6">TIMELINE</h2>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input 
                          className="w-5 h-5 border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0" 
                          name="timeline" 
                          type="radio" 
                          value="ASAP"
                          checked={formData.timeline === 'ASAP'}
                          onChange={handleChange}
                          required
                        />
                        <span className="text-sm md:text-base text-zinc-300">ASAP</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input 
                          className="w-5 h-5 border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0" 
                          name="timeline" 
                          type="radio" 
                          value="1-2 weeks"
                          checked={formData.timeline === '1-2 weeks'}
                          onChange={handleChange}
                          required
                        />
                        <span className="text-sm md:text-base text-zinc-300">1–2 weeks</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input 
                          className="w-5 h-5 border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0" 
                          name="timeline" 
                          type="radio" 
                          value="1 month+"
                          checked={formData.timeline === '1 month+'}
                          onChange={handleChange}
                          required
                        />
                        <span className="text-sm md:text-base text-zinc-300">1 month+</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* SUBMIT */}
                <div className="pt-4">
                  <button className="w-full bg-[#6366f1] text-white py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl shadow-[0_10px_40px_rgba(99,102,241,0.3)] hover:shadow-[0_10px_60px_rgba(99,102,241,0.5)] hover:-translate-y-1 transition-all active:scale-[0.98]" type="submit" disabled={status.loading}>
                    {status.loading ? 'Submitting...' : 'Submit Request'}
                  </button>
                  {status.message && (
                    <div className={`mt-4 p-4 rounded-xl text-center font-medium text-sm md:text-base ${status.error ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-green-500/10 text-green-500 border border-green-500/20'}`}>
                      {status.message}
                    </div>
                  )}
                  <p className="text-center text-zinc-500 text-xs mt-6 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: '"FILL" 1' }}>lock</span>
                    Encrypted submission. Your data is handled with strict confidentiality.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 px-8 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto border-t border-white/5 bg-[#0a0a0a] font-manrope text-sm">
        <div className="flex flex-col items-center md:items-start gap-2">
          <img alt="CipherForge Logo" className="h-10 w-auto mb-2" src="https://lh3.googleusercontent.com/aida/ADBb0uicfslIfpLZ87OHbttLFwavKtvYapR9AjMmPD4nCrxmh1yQhKW75EglhgZ3Otr4HI-Fao0udAb35_C93t4emWeA7GX1EUjXXiRNwqQgFIQN8t6jAxu8Ipz1lXJc5wXP7OkPciGYX1wKLmwVqdi_n2ppwBik6JnIRc68nN_GlXlf83KomsSVu6CaOXhE-GpVWkdCgl_WCWrsDZ8UTxQedZSdyXSs805cpocxkd6ZcuAKoe128-_T_eJxVuXBQBq1oY68yWZcZItg84U"/>
          <div className="text-lg font-black text-white">Crafting Systems You Can Trust</div>
          <div className="text-zinc-500">© 2026 CipherForge</div>
          <div className="text-zinc-600 italic mt-1 font-medium">Think. Build. Break. Secure.</div>
        </div>
        <div className="flex gap-8">
          <a className="text-zinc-500 hover:text-white transition-colors" href="#">Security Protocol</a>
          <a className="text-zinc-500 hover:text-white transition-colors" href="#">API Documentation</a>
          <a className="text-zinc-500 hover:text-white transition-colors" href="#">System Status</a>
          <a className="text-zinc-500 hover:text-white transition-colors" href="#">Privacy</a>
        </div>
      </footer>

      {/* Fixed FAB for direct contact (Mobile) */}
      <div className="fixed bottom-8 right-8 md:hidden">
        <button className="w-14 h-14 bg-[#6366f1] rounded-full flex items-center justify-center text-white shadow-2xl active:scale-90 transition-transform">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>chat</span>
        </button>
      </div>
    </div>
  );
}

export default App;
