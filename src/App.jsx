import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
