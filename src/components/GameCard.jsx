export default function GameCard({ game }) {
  return (
    <article className="group bg-white rounded-[16px] overflow-hidden border border-border-subtle shadow-soft transition-all duration-300 ease-ps-smooth flex flex-col hover:-translate-y-[6px] hover:border-border-focus hover:shadow-hover">
      <div className="relative w-full h-[240px] overflow-hidden bg-[#f1f5f9]">
        {game.image ? (
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-500 ease group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-[#e2e8f0]"></div>
        )}
        {game.badge && (
          <span className="absolute top-4 left-4 bg-ps-blue text-white font-heading text-[0.75rem] font-bold px-3 py-1 rounded-[12px] uppercase">
            {game.badge}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="font-heading text-[0.8rem] font-bold text-ps-blue uppercase tracking-[1px] mb-2">
          {game.genre}
        </span>
        <h3 className="font-heading text-[1.35rem] font-extrabold mb-3 text-text-main">
          {game.title}
        </h3>
        <p className="text-[0.95rem] text-text-muted mb-6 flex-grow leading-[1.6]">
          {game.description}
        </p>
        <button
          type="button"
          className="w-full bg-bg-section-alt text-text-main border border-border-subtle font-heading font-bold text-[0.9rem] p-3 rounded-[8px] transition-all duration-200 ease text-center cursor-pointer group-hover:bg-ps-blue group-hover:border-ps-blue group-hover:text-white"
        >
          {game.cta || "Find Out More"}
        </button>
      </div>
    </article>
  );
}
