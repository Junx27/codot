import React from "react";

function HeroBlog() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="m-10 p-20">
          <h1 className="font-bold text-6xl mb-5">Muara Blog</h1>
          <span className="font-bold text-2xlpy-2">Everyting must be true</span>

          <p className="text-gray-400 mt-5 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed
            esse enim? Ipsam totam similique ratione obcaecati cupiditate illum
            ut repellendus blanditiis, quod eos, molestias impedit at
            reiciendis, aspernatur explicabo?
          </p>
          <button className="bg-yellow-400 p-2 rounded-lg mt-10 ml-72">
            Read Now
          </button>
        </div>
        <img
          src="https://idwebhost.com/blog/wp-content/uploads/2021/08/img-2-6.jpg"
          alt=""
          style={{ width: "600px", height: "auto" }}
          className="rounded-lg"
        />
      </div>
      <hr />
    </div>
  );
}

export default HeroBlog;
