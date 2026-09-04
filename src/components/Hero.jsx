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
    <section id="hero" className="relative min-h-[80vh] pt-[100px] pb-10 flex items-center justify-center bg-bg-section-alt max-[768px]:min-h-0 max-[768px]:pt-[88px] max-[768px]:pb-8">
      <div className="max-w-[1280px] w-full mx-auto px-6 py-10 flex flex-col gap-9">
        <div className="grid grid-cols-2 max-[1024px]:grid-cols-1 gap-12 max-[1024px]:gap-8 items-center">
          <div className="flex flex-col">
            <h1 className="font-heading font-black text-[3.2rem] max-[1024px]:text-[2.6rem] max-[768px]:text-[2rem] leading-[1.15] mb-5 text-text-main">
              {currentSlide.title}
            </h1>
            <p className="text-[1.1rem] max-[768px]:text-[1rem] text-text-muted mb-9 leading-[1.7]">
              {currentSlide.description}
            </p>
            
            <div className="flex gap-4 flex-wrap">
              <button
                type="button"
                className="inline-flex items-center justify-center bg-ps-blue text-white font-heading font-bold text-base px-8 py-[14px] rounded-[30px] transition-all duration-300 ease-ps-smooth hover:bg-ps-blue-hover hover:-translate-y-[2px] hover:shadow-soft cursor-pointer"
              >
                {currentSlide.primaryCta || "Explore Now"}
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center bg-white text-text-main font-heading font-semibold text-base px-8 py-[14px] rounded-[30px] border border-border-subtle transition-all duration-300 ease-ps-smooth hover:bg-bg-section-alt hover:border-border-focus hover:-translate-y-[2px] cursor-pointer"
              >
                {currentSlide.secondaryCta || "Learn More"}
              </button>
            </div>
          </div>

          <div className="group bg-white rounded-[20px] overflow-hidden border border-border-subtle shadow-soft transition-all duration-300 ease-ps-smooth flex flex-col hover:-translate-y-[6px] hover:border-border-focus hover:shadow-hover">
            <div className="relative w-full h-[380px] max-[1024px]:h-[320px] max-[768px]:h-[250px] overflow-hidden bg-[#f1f5f9]">
              {currentSlide.image ? (
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-[#f1f5f9] border border-border-subtle"></div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-5 mt-[10px]">
          <button
            type="button"
            className="w-11 h-11 rounded-full bg-white border border-border-subtle text-text-main text-[1.1rem] flex items-center justify-center shadow-soft transition-all duration-200 ease hover:bg-ps-blue hover:border-ps-blue hover:text-white hover:scale-105 cursor-pointer"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            &#10094;
          </button>

          <div className="flex gap-3 items-center">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`h-3 transition-all duration-300 ease-ps-smooth cursor-pointer border-none ${
                  index === activeSlide
                    ? 'w-9 rounded-[6px] bg-ps-blue'
                    : 'w-3 rounded-full bg-border-focus'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="w-11 h-11 rounded-full bg-white border border-border-subtle text-text-main text-[1.1rem] flex items-center justify-center shadow-soft transition-all duration-200 ease hover:bg-ps-blue hover:border-ps-blue hover:text-white hover:scale-105 cursor-pointer"
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
