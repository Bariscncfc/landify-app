import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import Services from "./components/Services";
import Story from "./components/Story";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <body>
        <Hero />
        <Process />
        <Story />
        <Services />
        <FAQ />
        <Pricing />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
