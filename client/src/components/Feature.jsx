import React from "react";
import image from "../assets/images/image.webp";

function Feature() {
  return (
    <div className="text-center">
      <h2 className="text-base font-semibold leading-7 text-green-600">
        Deploy faster
      </h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        A better workflow
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
        ratione.
      </p>
      <img src={image} alt="" className="p-10 mx-auto" />
    </div>
  );
}

export default Feature;
