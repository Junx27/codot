import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aplication from "./pages/Aplication";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Mobile from "./pages/Mobile";
import Website from "./pages/Website";
import MobileDesign from "./pages/MobileDesign";
import WebDesign from "./pages/WebDesign";
import LogoDesign from "./pages/LogoDesign";
import Images from "./pages/Images";
import Categories from "./pages/Categories";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aplication" element={<Aplication />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/images" element={<Images />} />
          <Route exact path="/mobile" element={<Mobile />} />
          <Route exact path="/website" element={<Website />} />
          <Route exact path="/mobiledesign" element={<MobileDesign />} />
          <Route exact path="/webdesign" element={<WebDesign />} />
          <Route exact path="/logodesign" element={<LogoDesign />} />
          <Route exact path="/categories" element={<Categories />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
