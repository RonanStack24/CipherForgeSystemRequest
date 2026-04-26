
import './index.css';

function App() {
  return (
    <div className="font-body-md bg-surface-container-lowest">
      {/* TopNavBar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 h-20 w-full bg-[#171717]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(99,102,241,0.05)] font-manrope tracking-tight">
        <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
          <img alt="CipherForge Logo" className="h-8 w-auto mr-2" src="https://lh3.googleusercontent.com/aida/ADBb0uicfslIfpLZ87OHbttLFwavKtvYapR9AjMmPD4nCrxmh1yQhKW75EglhgZ3Otr4HI-Fao0udAb35_C93t4emWeA7GX1EUjXXiRNwqQgFIQN8t6jAxu8Ipz1lXJc5wXP7OkPciGYX1wKLmwVqdi_n2ppwBik6JnIRc68nN_GlXlf83KomsSVu6CaOXhE-GpVWkdCgl_WCWrsDZ8UTxQedZSdyXSs805cpocxkd6ZcuAKoe128-_T_eJxVuXBQBq1oY68yWZcZItg84U"/>
          CipherForge
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-zinc-400 hover:text-white transition-colors" href="#">Portfolio</a>
          <a className="text-zinc-400 hover:text-white transition-colors" href="#">Services</a>
          <a className="text-zinc-400 hover:text-white transition-colors" href="#">Architecture</a>
          <a className="text-zinc-400 hover:text-white transition-colors" href="#">Pricing</a>
        </div>
        <button className="bg-[#6366f1] text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-all active:scale-95 duration-150">
          Start Request
        </button>
      </nav>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#6366f1]/5 to-transparent pointer-events-none"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#6366f1] text-sm font-medium mb-6">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>verified_user</span>
              Security-Focused Development
            </div>
            <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4 mt-2">
              WE BUILD SECURE SYSTEMS FROM THE GROUND UP
            </div>
            <h1 className="font-display-xl text-[60px] leading-[72px] tracking-[-0.02em] font-extrabold text-white mb-6">
              Request a <span className="text-[#6366f1]">Custom Web</span> Application
            </h1>
            <p className="font-body-lg text-[18px] leading-[28px] text-zinc-400 max-w-2xl mx-auto mb-10">
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
              <form className="space-y-6">
                {/* CLIENT INFO */}
                <div className="p-8 glass-panel rounded-3xl shadow-xl">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="material-symbols-outlined text-zinc-500">person</span>
                    <h2 className="text-xl font-bold text-white tracking-tight">CLIENT INFO</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400 ml-1">Full Name</label>
                      <input className="w-full bg-[#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all outline-none" placeholder="John Doe" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400 ml-1">Email</label>
                      <input className="w-full bg-[#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all outline-none" placeholder="john@example.com" type="email" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-zinc-400 ml-1">Contact Number</label>
                      <input className="w-full bg-[#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all outline-none" placeholder="+63 900 000 0000" type="tel" />
                    </div>
                  </div>
                </div>

                {/* PROJECT DETAILS */}
                <div className="p-8 glass-panel rounded-3xl shadow-xl">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="material-symbols-outlined text-zinc-500">assignment</span>
                    <h2 className="text-xl font-bold text-white tracking-tight">PROJECT DETAILS</h2>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400 ml-1">Project Type</label>
                      <select defaultValue="Custom Web App" className="w-full bg-[\#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[\#6366f1] focus:ring-1 focus:ring-[\#6366f1] transition-all outline-none appearance-none">
                        <option>Portfolio</option>
                        <option>E-commerce</option>
                        <option>Business System</option>
                        <option>Custom Web App</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400 ml-1">Project Description</label>
                      <textarea className="w-full bg-[#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all outline-none" placeholder="Describe the core logic and user flow..." rows={4}></textarea>
                    </div>
                  </div>
                </div>

                {/* FEATURES */}
                <div className="p-8 glass-panel rounded-3xl shadow-xl">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="material-symbols-outlined text-zinc-500">featured_play_list</span>
                    <h2 className="text-xl font-bold text-white tracking-tight">FEATURES</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <label className="flex items-center gap-3 p-4 rounded-xl bg-[#090909] border border-white/5 cursor-pointer hover:border-[#6366f1]/40 transition-colors">
                      <input className="w-5 h-5 rounded border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0 focus:ring-[#6366f1]" type="checkbox" />
                      <span className="text-zinc-300">Login System</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 rounded-xl bg-[#090909] border border-white/5 cursor-pointer hover:border-[#6366f1]/40 transition-colors">
                      <input className="w-5 h-5 rounded border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0 focus:ring-[#6366f1]" type="checkbox" />
                      <span className="text-zinc-300">Admin Dashboard</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 rounded-xl bg-[#090909] border border-white/5 cursor-pointer hover:border-[#6366f1]/40 transition-colors">
                      <input className="w-5 h-5 rounded border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0 focus:ring-[#6366f1]" type="checkbox" />
                      <span className="text-zinc-300">Payment Integration</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 rounded-xl bg-[#090909] border border-white/5 cursor-pointer hover:border-[#6366f1]/40 transition-colors">
                      <input className="w-5 h-5 rounded border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0 focus:ring-[#6366f1]" type="checkbox" />
                      <span className="text-zinc-300">API Integration</span>
                    </label>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400 ml-1">Other Features</label>
                    <input className="w-full bg-[#090909] border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all outline-none" placeholder="Explain other specific requirements..." type="text" />
                  </div>
                </div>

                {/* BUDGET & TIMELINE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 glass-panel rounded-3xl shadow-xl">
                    <h2 className="text-lg font-bold text-white mb-6">BUDGET</h2>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input className="w-5 h-5 border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0" name="budget" type="radio" />
                        <span className="text-zinc-300">₱1,000 – ₱5,000</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input className="w-5 h-5 border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0" name="budget" type="radio" />
                        <span className="text-zinc-300">₱5,000 – ₱10,000</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input className="w-5 h-5 border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0" name="budget" type="radio" />
                        <span className="text-zinc-300">₱10,000+</span>
                      </label>
                    </div>
                  </div>
                  <div className="p-8 glass-panel rounded-3xl shadow-xl">
                    <h2 className="text-lg font-bold text-white mb-6">TIMELINE</h2>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input className="w-5 h-5 border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0" name="timeline" type="radio" />
                        <span className="text-zinc-300">ASAP</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input className="w-5 h-5 border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0" name="timeline" type="radio" />
                        <span className="text-zinc-300">1–2 weeks</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input className="w-5 h-5 border-white/10 bg-transparent text-[#6366f1] focus:ring-offset-0" name="timeline" type="radio" />
                        <span className="text-zinc-300">1 month+</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* SUBMIT */}
                <div className="pt-4">
                  <button className="w-full bg-[#6366f1] text-white py-5 rounded-2xl font-black text-xl shadow-[0_10px_40px_rgba(99,102,241,0.3)] hover:shadow-[0_10px_60px_rgba(99,102,241,0.5)] hover:-translate-y-1 transition-all active:scale-[0.98]" type="submit">
                    Submit Request
                  </button>
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
