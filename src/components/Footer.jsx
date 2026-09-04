export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-subtle pt-[60px] pb-8 mt-auto">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top Footer Row: Logo & Main Navigation */}
        <div className="flex items-center justify-between flex-wrap gap-8 mb-10 max-[768px]:flex-col max-[768px]:items-start">
          <div className="flex flex-col gap-[6px]">
            <a href="#hero" className="flex items-center gap-3 text-ps-blue">
              <svg
                className="w-[38px] h-[30px] text-ps-blue"
                viewBox="0 0 50 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6 30.2L11.6 8.5L20.2 12.3C22.6 13.4 23.9 15.2 23.9 17.7C23.9 20.3 22.3 22 19.3 22.8L11.6 20.6V26.2L16.2 27.6C18.4 28.3 19.3 29.5 19.3 31C19.3 32.7 17.6 33.7 14.5 33.7C12.7 33.7 11.2 33.2 10 32.2L11.6 30.2Z"
                  fill="currentColor"
                />
                <path
                  d="M23.1 36.4C18.9 36.4 13.9 34.6 10.6 32.9L12.5 28.5C15.4 30 19.6 31.4 23.3 31.4C26.7 31.4 28 30.4 28 29.2C28 28.1 26.9 27.4 24.3 26.7L20.4 25.6C15.7 24.3 13.3 21.6 13.3 17.4C13.3 12.6 17.4 9.1 24.6 9.1C28.5 9.1 32.8 10.4 35.8 11.9L33.9 16.4C31.3 15.1 27.8 14 24.5 14C21.7 14 20.2 15 20.2 16.2C20.2 17.3 21.4 17.9 23.6 18.5L27.7 19.6C32.9 21 35.1 23.8 35.1 27.9C35.1 33.1 30.4 36.4 23.1 36.4Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-heading font-extrabold text-[1.25rem] text-text-main">PlayStation</span>
            </a>
            <p className="text-[0.85rem] text-text-dim font-medium">Play Has No Limits™</p>
          </div>

          <div className="flex gap-7 flex-wrap">
            <a href="#hero" className="font-heading font-semibold text-[0.9rem] text-text-muted transition-colors duration-200 ease hover:text-ps-blue">Home</a>
            <a href="#games" className="font-heading font-semibold text-[0.9rem] text-text-muted transition-colors duration-200 ease hover:text-ps-blue">Games</a>
            <a href="#ps5-showcase" className="font-heading font-semibold text-[0.9rem] text-text-muted transition-colors duration-200 ease hover:text-ps-blue">PS5 Console</a>
            <a href="#accessories" className="font-heading font-semibold text-[0.9rem] text-text-muted transition-colors duration-200 ease hover:text-ps-blue">Accessories</a>
          </div>

          {/* Social Media Placeholders */}
          <div className="flex gap-3">
            <span className="w-9 h-9 rounded-full bg-bg-section-alt border border-border-subtle text-text-muted flex items-center justify-center font-heading font-bold text-[0.8rem] transition-all duration-200 ease cursor-pointer hover:bg-ps-blue hover:border-ps-blue hover:text-white hover:-translate-y-[2px]" title="Twitter / X">X</span>
            <span className="w-9 h-9 rounded-full bg-bg-section-alt border border-border-subtle text-text-muted flex items-center justify-center font-heading font-bold text-[0.8rem] transition-all duration-200 ease cursor-pointer hover:bg-ps-blue hover:border-ps-blue hover:text-white hover:-translate-y-[2px]" title="Instagram">IG</span>
            <span className="w-9 h-9 rounded-full bg-bg-section-alt border border-border-subtle text-text-muted flex items-center justify-center font-heading font-bold text-[0.8rem] transition-all duration-200 ease cursor-pointer hover:bg-ps-blue hover:border-ps-blue hover:text-white hover:-translate-y-[2px]" title="YouTube">YT</span>
            <span className="w-9 h-9 rounded-full bg-bg-section-alt border border-border-subtle text-text-muted flex items-center justify-center font-heading font-bold text-[0.8rem] transition-all duration-200 ease cursor-pointer hover:bg-ps-blue hover:border-ps-blue hover:text-white hover:-translate-y-[2px]" title="Twitch">TV</span>
          </div>
        </div>

        <div className="w-full h-[1px] bg-border-subtle mb-8"></div>

        {/* Bottom Footer Row: Legal, Region & Copyright */}
        <div className="flex items-center justify-between flex-wrap gap-5 max-[768px]:flex-col max-[768px]:items-start">
          <div className="flex items-center gap-2 text-[0.85rem] text-text-muted font-heading font-semibold">
            <span className="text-[1rem]">&#127760;</span>
            <span>India / English</span>
          </div>

          <div className="flex gap-5 flex-wrap">
            <a href="#privacy" className="text-[0.85rem] text-text-dim transition-colors duration-200 ease hover:text-text-muted" onClick={(e) => e.preventDefault()}>Support</a>
            <a href="#terms" className="text-[0.85rem] text-text-dim transition-colors duration-200 ease hover:text-text-muted" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#terms" className="text-[0.85rem] text-text-dim transition-colors duration-200 ease hover:text-text-muted" onClick={(e) => e.preventDefault()}>Website Terms</a>
            <a href="#sitemap" className="text-[0.85rem] text-text-dim transition-colors duration-200 ease hover:text-text-muted" onClick={(e) => e.preventDefault()}>Legal</a>
          </div>

          <p className="text-[0.8rem] text-text-dim w-full mt-4">
            &copy; {new Date().getFullYear()} Sony Interactive Entertainment LLC. College Project Clone.
          </p>
        </div>
      </div>
    </footer>
  );
}
