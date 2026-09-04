import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GamesSection from './components/GamesSection';
import PS5Accessories from './components/PS5Accessories';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <GamesSection />
        <PS5Accessories />
      </main>
      <Footer />
    </div>
  );
}
