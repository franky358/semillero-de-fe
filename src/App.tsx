import Hero from "./components/Hero";
import SeedAnimation from "./components/SeedAnimation";
import FloatingButton from "./components/FloatingButton";

function App() {
  return (
    <div className="px-8 py-8 md:max-w-2xl max-w-6xl mx-auto md:py-16">
      <Hero />
      <SeedAnimation />
      {/* <Calendar /> */}
      <FloatingButton />
    </div>
  );
}

export default App;
