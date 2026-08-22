export default function GameCard({ game }) {
  return (
    <article className="game-card">
      <div className="game-card-media">
        {game.image ? (
          <img src={game.image} alt={game.title} className="game-card-image" />
        ) : (
          <div className="media-placeholder game-card-placeholder"></div>
        )}
        {game.badge && <span className="game-badge">{game.badge}</span>}
      </div>

      <div className="game-card-content">
        <span className="game-genre">{game.genre}</span>
        <h3 className="game-title">{game.title}</h3>
        <p className="game-description">{game.description}</p>
        <button type="button" className="btn-card-action">
          {game.cta || "Find Out More"}
        </button>
      </div>
    </article>
  );
}
