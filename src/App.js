import Footer from "./layout/Footer";
import Header from "./layout/Header";
import GoTop from "./components/GoTop";
import MainSlider from "./components/MainSlider";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";


function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <MainSlider className="app__main-slider" />

        <Benefits className="app__benefits" />

        <Gallery className="app__gallery" />
      </main>
      <Footer />

      { false && <GoTop /> }
    </div>
  );
}

export default App;
