export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-[12px] border-b border-border-subtle h-[72px]">
      <div className="max-w-[1280px] h-full mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 text-ps-blue transition-opacity duration-200 ease-in-out hover:opacity-85">
          <svg
            className="w-[38px] h-[30px] text-ps-blue"
            viewBox="0 0 50 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="PlayStation Logo"
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
          <span className="font-heading font-extrabold text-[1.35rem] tracking-[-0.5px] text-text-main">PlayStation</span>
        </a>

        {/* Navigation Links */}
        <nav className="max-[768px]:hidden flex items-center gap-9">
          <a href="#games" className="font-heading font-semibold text-[0.95rem] text-text-muted transition-colors duration-200 ease relative py-2 hover:text-ps-blue after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-ps-blue after:transition-all after:duration-300 after:ease-ps-smooth hover:after:w-full">
            Games
          </a>
          <a href="#ps5-showcase" className="font-heading font-semibold text-[0.95rem] text-text-muted transition-colors duration-200 ease relative py-2 hover:text-ps-blue after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-ps-blue after:transition-all after:duration-300 after:ease-ps-smooth hover:after:w-full">
            PS5
          </a>
          <a href="#accessories" className="font-heading font-semibold text-[0.95rem] text-text-muted transition-colors duration-200 ease relative py-2 hover:text-ps-blue after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-ps-blue after:transition-all after:duration-300 after:ease-ps-smooth hover:after:w-full">
            Accessories
          </a>
        </nav>

        {/* Sign In Button */}
        <div className="flex items-center gap-4">
          <button type="button" className="max-[768px]:hidden bg-ps-blue text-white font-heading font-bold text-[0.9rem] px-[22px] py-2 rounded-[20px] transition-colors duration-200 ease hover:bg-ps-blue-hover">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
