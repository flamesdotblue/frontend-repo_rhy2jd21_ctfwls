import Hero from './components/Hero';
import Highlights from './components/Highlights';
import TechSpecs from './components/TechSpecs';
import CallToActionFooter from './components/CallToActionFooter';

function App() {
  return (
    <main className="min-h-screen bg-black antialiased">
      <Hero />
      <Highlights />
      <TechSpecs />
      <CallToActionFooter />
    </main>
  );
}

export default App;
