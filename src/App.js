import Error from "./pages/Error";
import Footer from "./layout/Footer";
import Header from "./layout/Header";


function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Error />
      </main>
      <Footer />
    </div>
  );
}

export default App;
