export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card-media">
        {product.image ? (
          <img src={product.image} alt={product.name} className="product-image" />
        ) : (
          <div className="media-placeholder product-placeholder"></div>
        )}
      </div>

      <div className="product-card-content">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <button type="button" className="btn-product-action">
          {product.cta || "Buy Now"}
        </button>
      </div>
    </article>
  );
}
