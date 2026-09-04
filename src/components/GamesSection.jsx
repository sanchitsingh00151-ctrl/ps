import GameCard from './GameCard';
import { games } from '../data/games';

export default function GamesSection() {
  return (
    <section id="games" className="bg-white relative">
      <div className="max-w-[1280px] mx-auto py-20 px-6 max-[768px]:py-[50px] max-[768px]:px-4">
        <div className="text-center mb-12">
          <span className="text-ps-blue font-heading text-[0.85rem] font-bold tracking-[2px] uppercase block mb-2">
            FEATURED TITLES
          </span>
          <h2 className="font-heading text-[2.5rem] max-[768px]:text-[1.8rem] font-extrabold tracking-[-0.5px] text-text-main uppercase">
            TOP GAMES
          </h2>
          <div className="w-[50px] h-[3px] bg-ps-blue mx-auto mt-4 rounded-[2px]"></div>
        </div>

        <div className="grid grid-cols-3 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1 gap-8">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}
