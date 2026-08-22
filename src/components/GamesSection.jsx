import GameCard from './GameCard';
import { games } from '../data/games';

export default function GamesSection() {
  return (
    <section id="games" className="games-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">FEATURED TITLES</span>
          <h2 className="section-title">TOP GAMES</h2>
          <div className="section-divider"></div>
        </div>

        <div className="games-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}
