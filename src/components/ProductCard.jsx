export default function ProductCard({ product }) {
  return (
    <article className="group bg-white rounded-[16px] overflow-hidden border border-border-subtle shadow-soft transition-all duration-300 ease-ps-smooth flex flex-col hover:-translate-y-[6px] hover:border-border-focus hover:shadow-hover">
      <div className="relative w-full h-[200px] bg-[#f1f5f9] overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 ease group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-[#e2e8f0]"></div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <span className="font-heading text-[0.75rem] font-bold text-ps-blue uppercase mb-[6px]">
          {product.category}
        </span>
        <h3 className="font-heading text-[1.15rem] font-extrabold mb-[10px] text-text-main leading-[1.3]">
          {product.name}
        </h3>
        <p className="text-[0.88rem] text-text-muted mb-5 flex-grow leading-[1.5]">
          {product.description}
        </p>
        <button
          type="button"
          className="w-full bg-ps-blue-subtle text-ps-blue border border-[rgba(0,112,209,0.2)] font-heading font-bold text-[0.85rem] p-[10px] rounded-[6px] transition-all duration-200 ease cursor-pointer text-center group-hover:bg-ps-blue group-hover:border-ps-blue group-hover:text-white"
        >
          {product.cta || "Buy Now"}
        </button>
      </div>
    </article>
  );
}
