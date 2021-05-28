import "./App.css";

//component
import Footer from "./component/Footer";
import Header from "./component/Header";
import MainContent from "./component/MainContent";

function App() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
