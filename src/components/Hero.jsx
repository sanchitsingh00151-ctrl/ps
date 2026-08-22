import { useState } from 'react';
import { heroSlides } from '../data/heroSlides';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const currentSlide = heroSlides[activeSlide];

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-slide-grid">
          <div className="hero-content">
            <h1 className="hero-title">{currentSlide.title}</h1>
            <p className="hero-description">{currentSlide.description}</p>
            
            <div className="hero-cta-group">
              <button type="button" className="btn-primary">
                {currentSlide.primaryCta || "Explore Now"}
              </button>
              <button type="button" className="btn-secondary">
                {currentSlide.secondaryCta || "Learn More"}
              </button>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-media">
              {currentSlide.image ? (
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="hero-card-image"
                />
              ) : (
                <div className="media-placeholder hero-placeholder"></div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="hero-controls">
          <button
            type="button"
            className="hero-control-btn prev-btn"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            &#10094;
          </button>

          <div className="hero-indicators">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`indicator-dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="hero-control-btn next-btn"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

