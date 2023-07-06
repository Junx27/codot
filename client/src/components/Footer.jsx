import React from "react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import logo from "../assets/images/codot.png";
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
const products = [
  {
    name: "Aplication",

    href: "/aplication",
    icon: SquaresPlusIcon,
  },
  {
    name: "Logo Design",

    href: "/logodesign",
    icon: GifIcon,
  },
  {
    name: "Web Design",

    href: "/webdesign",
    icon: GlobeAltIcon,
  },
  {
    name: "Mobile Design",

    href: "/mobiledesign",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Images",

    href: "/images",
    icon: PhotoIcon,
  },
];
const member = [
  {
    name: "Husain Bdullah",

    href: "https://hyuzhen-profile.vercel.app/",
    icon: UserCircleIcon,
  },
  {
    name: "Senna Bhany Majid",

    href: "https://jualan-xi.vercel.app/",
    icon: UserCircleIcon,
  },
  {
    name: "Tri Saptono",

    href: "https://webpertama-4mqv.vercel.app/",
    icon: UserCircleIcon,
  },
];

function Footer() {
  return (
    <div>
      <hr className="pb-5" />
      <div className="grid grid-cols-4 gap-3 inline">
        <div>
          <img
            className="text-xl font-bold mx-7 w-10 ml-20"
            src={logo}
            alt=""
          />
          <p className="text-gray-500 pb-20 mx-10 mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            cumque iure, nihil similique minima iste odio quibusdam nostrum
            saepe, nam voluptas impedit. Quo iusto expedita quibusdam nihil est
            neque pariatur.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold mx-7">Feature</h1>
          <p className="text-gray-500 pb-20 mt-7">
            {products.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg text-sm leading-6 hover:bg-gray-50"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon
                    className="h-6 w-6 text-gray-600 group-hover:text-green-600 group-hover:animate-bounce"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-auto">
                  <a
                    href={item.href}
                    className="block font-semibold text-gray-900 group-hover:text-green-900"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                </div>
              </div>
            ))}
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold mx-7">Member</h1>
          <p className="text-gray-500 pb-20 mt-5">
            {member.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg text-sm leading-6 hover:bg-gray-50"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon
                    className="h-6 w-6 text-gray-600 group-hover:text-green-600 group-hover:animate-bounce"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-auto">
                  <a
                    href={item.href}
                    className="block font-semibold text-gray-900 group-hover:text-green-900"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                </div>
              </div>
            ))}
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold mx-7">Develop</h1>
          <p className="text-gray-500 pb-10 mx-10 mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            cumque iure, nihil similique minima iste odio quibusdam nostrum
            saepe, nam voluptas impedit. Quo iusto expedita quibusdam nihil est
            neque pariatur.
          </p>
        </div>
      </div>
      <div className="text-xs text-center py-4 text-green-900">
        © 2023 Muara, Inc. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
