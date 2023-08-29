import React, { useState } from "react";
import Hero from "../components/HeroBlog";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import blog from "../data/Blog.json";
function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 4;
  const lastindex = currentPage * recordPerPage;
  const firstIndex = lastindex - recordPerPage;
  const records = blog.slice(firstIndex, lastindex);
  const npage = Math.ceil(blog.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  // start filtering//
  const [data, setData] = useState(blog);
  const filterResult = (catItem) => {
    const result = blog.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };
  //end filtering//

  function next() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({
        top: 600,
        behavior: "smooth",
      });
    }
  }
  function prev() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({
        top: 600,
        behavior: "smooth",
      });
    }
  }
  function changeCpage(id) {}
  return (
    <div className="">
      <Hero />
      <div className="grid grid-cols-4">
        <div className="col-span-3 rounded-lg m-10">
          <div className="grid grid-cols-2 gap-10 m-10" pagination={true}>
            {records.map((blog) => (
              <div className=" border rounded-lg p-5  shadow hover:shadow-indigo-400">
                <img
                  className="rounded-lg object-cover"
                  src={blog.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "200px",
                  }}
                />
                <div className="grid grid-cols-3 m-2 items-center">
                  <img className="w-10" src={blog.avatar} alt="" />
                  <div>
                    <p className="font-bold -ml-10 truncate">{blog.auth}</p>
                    <p className="text-gray-400 text-xs -ml-10">
                      {blog.category}
                    </p>
                  </div>
                  <p className="text-gray-400 text-end text-xs">{blog.date}</p>
                </div>
                <hr />
                <h1 className="font-bold my-5 text-2xl truncate">
                  {blog.title}
                </h1>

                <p className="text-black text-sm indent-8 text-justify truncate">
                  {blog.description}
                </p>
                <p className="text-end text-blue-600 mt-5 hover:text-blue-400 ">
                  Selengkapnya &rarr;
                </p>
              </div>
            ))}
          </div>
          <ul className="flex justify-center">
            <li
              className="border border-gray-400 py-2 px-4 rounded-l-lg hover:bg-gray-400"
              onClick={prev}
            >
              &larr;
            </li>
            {numbers.map((n, i) => (
              <li
                className={`border border-gray-400 py-2 px-4 ${
                  currentPage === n && "bg-gray-400 text-white"
                }`}
              >
                {n}
              </li>
            ))}
            <li
              className="border border-gray-400 py-2 px-4 rounded-r-lg hover:bg-gray-400"
              onClick={next}
            >
              &rarr;
            </li>
          </ul>
        </div>
        <div className="border rounded-lg mt-20 mb-32 mr-10">
          <div className="inline-flex items-center">
            <input
              type="text"
              className="outline-none px-4 border mx-2 my-4 rounded-lg"
              placeholder="search"
            />
            <MagnifyingGlassIcon className="h-5 w-5 ml-2" aria-hidden="true" />
          </div>
          <h1 className="font-bold mx-4">Kategori</h1>
          <ul className="text-blue-500 mx-8">
            <li
              className="hover:text-blue-300"
              onClick={() => filterResult("Art")}
            >
              Art
            </li>
            <li
              className="hover:text-blue-300"
              onClick={() => filterResult("Design")}
            >
              Design
            </li>
            <li
              className="hover:text-blue-300"
              onClick={() => filterResult("Daily")}
            >
              Daily
            </li>
            <li
              className="hover:text-blue-300"
              onClick={() => filterResult("Fashion")}
            >
              Fashion
            </li>
            <li
              className="hover:text-blue-300"
              onClick={() => filterResult("News")}
            >
              News
            </li>
            <li
              className="hover:text-blue-300"
              onClick={() => filterResult("Modern")}
            >
              Modern
            </li>
            <li
              className="hover:text-blue-300"
              onClick={() => filterResult("Wallpaper")}
            >
              Wallpaper
            </li>
            <li
              className="hover:text-blue-300"
              onClick={() => filterResult("Mobile")}
            >
              Mobile
            </li>
            <li
              className="hover:text-blue-300"
              onClick={() => filterResult("Website")}
            >
              Website
            </li>
            <li
              className="hover:text-blue-300"
              onClick={() => filterResult("Program")}
            >
              Program
            </li>
            <li
              className="hover:text-blue-300"
              onClick={() => filterResult("Desktop")}
            >
              Desktop
            </li>
            <li
              className="hover:text-blue-300"
              onClick={() => filterResult("Otomotif")}
            >
              Otomotif
            </li>
            <li
              className="hover:text-blue-300"
              onClick={() => filterResult("Game")}
            >
              Game
            </li>
            <li className="hover:text-blue-300" onClick={() => setData(blog)}>
              All
            </li>
          </ul>
          <h1 className="font-bold mt-5 mx-4">Author</h1>
          <ul className="text-blue-500 mx-8">
            <li className="hover:text-blue-300">James Smith</li>
            <li className="hover:text-blue-300">Leona</li>
            <li className="hover:text-blue-300">Roberth Mark</li>
            <li className="hover:text-blue-300">Senna Bhany</li>
            <li className="hover:text-blue-300">Husain Abdullah</li>
            <li className="hover:text-blue-300">Elma Fiana</li>
            <li className="hover:text-blue-300">Fadlulloh Putra</li>
            <li className="hover:text-blue-300">Ikhsan Sulistyo</li>
            <li className="hover:text-blue-300">Saefulloh</li>
            <li className="hover:text-blue-300">Fauzi Ahmad</li>
            <li className="hover:text-blue-300">Murizky Ade</li>
            <li className="hover:text-blue-300">Julian Cliert</li>
            <li className="hover:text-blue-300">Antonio Paul</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Blog;
