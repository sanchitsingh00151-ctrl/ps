import ProductCard from './ProductCard';
import { ps5Showcase, products } from '../data/products';

export default function PS5Accessories() {
  return (
    <section id="ps5-showcase" className="bg-bg-section-alt">
      <div className="max-w-[1280px] mx-auto py-20 px-6 max-[768px]:py-[50px] max-[768px]:px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-ps-blue font-heading text-[0.85rem] font-bold tracking-[2px] uppercase block mb-2">
            NEXT-GEN HARDWARE & GEAR
          </span>
          <h2 className="font-heading text-[2.5rem] max-[768px]:text-[1.8rem] font-extrabold tracking-[-0.5px] text-text-main uppercase">
            PS5 CONSOLE & ACCESSORIES
          </h2>
          <div className="w-[50px] h-[3px] bg-ps-blue mx-auto mt-4 rounded-[2px]"></div>
        </div>

        {/* Part A: PS5 Showcase */}
        <div className="bg-white rounded-[24px] border border-border-subtle p-12 max-[1024px]:p-8 max-[768px]:p-6 grid grid-cols-2 max-[1024px]:grid-cols-1 gap-12 max-[768px]:gap-7 items-center mb-20 shadow-soft">
          <div className="relative w-full min-h-[380px] rounded-[16px] overflow-hidden">
            {ps5Showcase.image ? (
              <img
                src={ps5Showcase.image}
                alt={ps5Showcase.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full min-h-[380px] bg-[#e2e8f0] rounded-[16px]"></div>
            )}
          </div>

          <div className="flex flex-col">
            <span className="font-heading text-[0.85rem] font-extrabold text-ps-blue tracking-[2px] mb-2">
              {ps5Showcase.tagline}
            </span>
            <h3 className="font-heading text-[2.5rem] max-[768px]:text-[1.8rem] font-black mb-4 leading-[1.2] text-text-main">
              {ps5Showcase.title}
            </h3>
            <p className="text-[1.05rem] text-text-muted mb-7 leading-[1.7]">
              {ps5Showcase.description}
            </p>

            <ul className="grid grid-cols-2 max-[768px]:grid-cols-1 gap-[14px] mb-8 list-none">
              {ps5Showcase.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-[10px]">
                  <span className="text-ps-blue font-black">&#10003;</span>
                  <span className="text-[0.9rem] text-text-main font-semibold">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="self-start inline-flex items-center justify-center bg-ps-blue text-white font-heading font-bold text-base px-8 py-[14px] rounded-[30px] transition-all duration-300 ease-ps-smooth hover:bg-ps-blue-hover hover:-translate-y-[2px] hover:shadow-soft cursor-pointer"
            >
              {ps5Showcase.cta}
            </button>
          </div>
        </div>

        {/* Part B: Accessories Showcase */}
        <div id="accessories" className="mt-10">
          <h3 className="font-heading text-[1.5rem] font-extrabold text-center mb-9 tracking-[1px] text-text-main">
            PS5 ESSENTIAL ACCESSORIES
          </h3>
          
          <div className="grid grid-cols-4 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
