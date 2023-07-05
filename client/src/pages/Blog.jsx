import React from "react";
import bghero from "../assets/images/bgherowebsite.jpg";

function Blog() {
  return (
    <div>
      <div
        className="grid grid-cols-2 gap-2 bg-green-100 mb-80"
        style={{ width: "100%", height: "500px" }}
      >
        <div className="px-20 -mt-10">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <p className="text-sm mb-2 text-gray-600">Get App Here</p>
            <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="text-sm leading-8 text-black">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              asperiores odit praesentium dolorum soluta in ipsa ducimus facilis
              eos dolore vitae alias illo commodi eligendi, eius, quidem
              recusandae hic consequatur. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Tenetur molestiae magni aut sint
              temporibus veritatis vero odio sapiente libero quaerat cupiditate
              asperiores aliquid odit mollitia dolores sequi velit, totam
              fugiat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"></div>
          </div>
        </div>
        <div className="">
          <img
            className="h-auto max-w-lg mt-10 p-5 mx-auto"
            src={bghero}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
