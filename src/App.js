import "./App.css";
import { AboutPage } from "./components/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import { HomePage } from "./components/HomePage/HomePage";
import { Navbar } from "./components/Navbar/Nvabr";
import { Services } from "./components/Services/Services";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutPage />
      <Services />
      <Footer />
    </>
  );
}

export default App;
