export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Footer Row: Logo & Main Navigation */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <svg
                className="ps-logo-icon"
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
              <span className="footer-logo-text">PlayStation</span>
            </a>
            <p className="footer-tagline">Play Has No Limits™</p>
          </div>

          <div className="footer-nav">
            <a href="#hero" className="footer-link">Home</a>
            <a href="#games" className="footer-link">Games</a>
            <a href="#ps5-showcase" className="footer-link">PS5 Console</a>
            <a href="#accessories" className="footer-link">Accessories</a>
          </div>

          {/* Social Media Placeholders */}
          <div className="footer-socials">
            <span className="social-badge" title="Twitter / X">X</span>
            <span className="social-badge" title="Instagram">IG</span>
            <span className="social-badge" title="YouTube">YT</span>
            <span className="social-badge" title="Twitch">TV</span>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom Footer Row: Legal, Region & Copyright */}
        <div className="footer-bottom">
          <div className="footer-region">
            <span className="globe-icon">&#127760;</span>
            <span className="region-text">India / English</span>
          </div>

          <div className="footer-legal">
            <a href="#privacy" className="legal-link" onClick={(e) => e.preventDefault()}>Support</a>
            <a href="#terms" className="legal-link" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#terms" className="legal-link" onClick={(e) => e.preventDefault()}>Website Terms</a>
            <a href="#sitemap" className="legal-link" onClick={(e) => e.preventDefault()}>Legal</a>
          </div>

          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Sony Interactive Entertainment LLC. College Project Clone.
          </p>
        </div>
      </div>
    </footer>
  );
}
