import React from "react";
import {
  PhotoIcon,
  Bars3Icon,
  DevicePhoneMobileIcon,
  GifIcon,
  GlobeAltIcon,
  SquaresPlusIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function Categories() {
  return (
    <div>
      <div className="ml-20 mb-5 mt-20">
        <p className="text-sm text-gray-400">include</p>
        <h1 className="text-green-800 font-bold text-3xl">Aplication</h1>
        <p className="text-sm text-green-500  ml-32">version</p>
      </div>
      <hr className="ml-20 mr-20" />
      <div className="ml-20 mt-10 mb-64 inline-flex text-gray-500 align-top">
        <div
          className="text-center block mx-20 leading-6 hover:text-green-500 hover:-mt-1"
          style={{ width: "50px", height: "auto" }}
        >
          <PhotoIcon />
          <p>Photos</p>
        </div>
        <div
          className="text-center block mx-20 leading-6 hover:text-green-500 hover:-mt-1"
          style={{ width: "50px", height: "auto" }}
        >
          <DevicePhoneMobileIcon />
          <p>Phone</p>
        </div>
        <div
          className="text-center block mx-20 leading-6 hover:text-green-500 hover:-mt-1"
          style={{ width: "50px", height: "auto" }}
        >
          <GifIcon />
          <p>Image</p>
        </div>
        <div
          className="text-center block mx-20 leading-6 hover:text-green-500 hover:-mt-1"
          style={{ width: "50px", height: "auto" }}
        >
          <GlobeAltIcon />
          <p>Website</p>
        </div>
        <div
          className="text-center block mx-20 leading-6 hover:text-green-500 hover:-mt-1"
          style={{ width: "50px", height: "auto" }}
        >
          <SquaresPlusIcon />
          <p>Icon</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
