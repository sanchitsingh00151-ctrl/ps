import ProductCard from './ProductCard';
import { ps5Showcase, products } from '../data/products';

export default function PS5Accessories() {
  return (
    <section id="ps5-showcase" className="ps5-accessories">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">NEXT-GEN HARDWARE & GEAR</span>
          <h2 className="section-title">PS5 CONSOLE & ACCESSORIES</h2>
          <div className="section-divider"></div>
        </div>

        {/* Part A: PS5 Showcase */}
        <div className="ps5-showcase">
          <div className="ps5-showcase-media">
            {ps5Showcase.image ? (
              <img
                src={ps5Showcase.image}
                alt={ps5Showcase.title}
                className="ps5-image"
              />
            ) : (
              <div className="media-placeholder ps5-placeholder"></div>
            )}
          </div>

          <div className="ps5-showcase-content">
            <span className="ps5-tagline">{ps5Showcase.tagline}</span>
            <h3 className="ps5-title">{ps5Showcase.title}</h3>
            <p className="ps5-description">{ps5Showcase.description}</p>

            <ul className="ps5-features-list">
              {ps5Showcase.features.map((feature, index) => (
                <li key={index} className="ps5-feature-item">
                  <span className="feature-bullet">&#10003;</span>
                  <span className="feature-text">{feature}</span>
                </li>
              ))}
            </ul>

            <button type="button" className="btn-primary ps5-cta">
              {ps5Showcase.cta}
            </button>
          </div>
        </div>

        {/* Part B: Accessories Showcase */}
        <div id="accessories" className="accessories-wrapper">
          <h3 className="accessories-heading">PS5 ESSENTIAL ACCESSORIES</h3>
          
          <div className="accessories-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
