import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./router/Router";
import "./styles/global.scss";

function App() {
  return (
    <>
      <div className="page-container">
        <Header />
        <Router />
      </div>

      <Footer />
    </>
  );
}

export default App;
