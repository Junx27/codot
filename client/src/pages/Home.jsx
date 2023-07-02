import React from "react";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import image from "../assets/images/image.jpg";
import image1 from "../assets/images/image1.jpg";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <div
        className="bg-fixed bg-blend-overlay bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${image})`,
          width: "100%",
          height: "500px",
        }}
      >
        <Hero />
      </div>
      <div className="mt-20" style={{ height: "500px" }}>
        <Feature />
      </div>
      <div
        className="bg-fixed bg-blend-overlay bg-no-repeat bg-cover -mt-10"
        style={{
          backgroundImage: `url(${image1})`,
          width: "100%",
          height: "500px",
        }}
      ></div>
      <div className="mt-20" style={{ height: "500px" }}></div>
      <div className="mt-40">
        <Blog />
      </div>
      <Contact />
    </div>
  );
}

export default Home;
