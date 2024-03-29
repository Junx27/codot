import React from "react";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import image from "../assets/images/image1.jpg";
import image1 from "../assets/images/image.jpeg";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Categories from "../components/Categoris";

function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-20" style={{ height: "500px" }}>
        <Feature />
      </div>
      <div className="mt-72">
        <Blog />
        <Categories />
      </div>
    </div>
  );
}

export default Home;
