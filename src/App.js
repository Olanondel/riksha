import Footer from "./layout/Footer";
import Header from "./layout/Header";
import GoTop from "./components/GoTop";
import MainSlider from "./components/MainSlider";


function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <MainSlider />
      </main>
      <Footer />

      { false && <GoTop /> }
    </div>
  );
}

export default App;
