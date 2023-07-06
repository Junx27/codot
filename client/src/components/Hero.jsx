import React from "react";
import image from "../assets/images/image1.jpg";
import image1 from "../assets/images/image.jpeg";

function Hero() {
  return (
    <div className="">
      <div className="grid grid-cols-2 mb-10">
        <img src={image} alt="" className="rounded" />
        <img src={image1} alt="" className="rounded" />
      </div>
      <h1 className="text-center font-bold text-5xl text-black">
        Muara is a website include any app <br /> ones mobile, website, etc.
      </h1>
      <p className="text-gray-400 mx-20 mt-10 pb-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat
        repellendus placeat quasi modi totam impedit nesciunt magni, voluptatem
        ipsa dolor aliquam at laboriosam voluptas rerum fugit qui officiis
        adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
        repellat repellendus placeat quasi modi totam impedit nesciunt magni,
        voluptatem ipsa dolor aliquam at laboriosam voluptas rerum fugit qui
        officiis adipisci.
      </p>
    </div>
  );
}

export default Hero;
