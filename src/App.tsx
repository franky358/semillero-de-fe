import React, { useState } from "react";

import Hero from "./components/Hero";
import SeedAnimation from "./components/SeedAnimation";
import FloatingButton from "./components/FloatingButton";
import AddDevotionalAct from "./components/AddDevotionalAct";
function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="py-8 md:max-w-2xl max-w-6xl mx-auto md:py-16">
      <Hero />
      <SeedAnimation />
      {isOpen && <AddDevotionalAct onOpen={setIsOpen} />}
      <FloatingButton onOpen={setIsOpen} />
    </div>
  );
}

export default App;
