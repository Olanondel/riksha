import Footer from "./layout/Footer";
import Header from "./layout/Header";
import GoTop from "./components/GoTop";
import MainSlider from "./components/sections/MainSlider";
import Benefits from "./components/sections/Benefits";
import Gallery from "./components/sections/Gallery";
import AboutCompany from "./components/sections/AboutCompany";


function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <MainSlider className="app__main-slider" />

        <Benefits className="app__benefits" />

        <AboutCompany className="app__about-company" />

        <Gallery className="app__gallery" />
      </main>
      <Footer />

      { false && <GoTop /> }
    </div>
  );
}

export default App;
