import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles.css";

function Navbar() {
  const [durum, setDurum] = useState(true);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.querySelector(".navbarcon")) {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.querySelector(".navbarcon").style.backgroundColor = "#171717"; //#171717
      } else {
        document.querySelector(".navbarcon").style.backgroundColor =
          "rgba(0, 0, 0, 0)";
        if (document.querySelector(".tl")) {
          document.querySelector(".tl").style.backgroundColor =
            "rgba(0, 0, 0, 0)";
        }
      }
    }
  }

  return (
    <div className="navbarcon flex justify-end items-center px-20 py-6 bg-transparent z-40 text-white lg:px-6 fixed w-full mb-14">
      <nav
        className={` flex justify-center items-center gap-x-10 ${
          durum && "lg:hidden"
        } lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#171717]  lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}
      >
        <ul className=" flex gap-10 text-2xl mr-4 lg:flex-col lg:gap-6 ">
          <li className="navbar-item">
            <AnchorLink href="#home" onClick={() => setDurum((cur) => !cur)}>
              Home
            </AnchorLink>
          </li>
          <li className="navbar-item">
            <AnchorLink href="#about" onClick={() => setDurum((cur) => !cur)}>
              About
            </AnchorLink>
          </li>
          <li className="navbar-item">
            <AnchorLink href="#skills" onClick={() => setDurum((cur) => !cur)}>
              Skills
            </AnchorLink>
          </li>
          <li className="navbar-item">
            <AnchorLink
              href="#projects"
              onClick={() => setDurum((cur) => !cur)}
            >
              Projects
            </AnchorLink>
          </li>
        </ul>

        <div className="btn">
          <button className="border-[1px] text-xl border-white border-solid py-2 px-4 my-4 hover:bg-white hover:text-black font-bold">
            <AnchorLink href="#contact" onClick={() => setDurum((cur) => !cur)}>
              Let's Connect
            </AnchorLink>
          </button>
        </div>
      </nav>
      <i
        onClick={() => setDurum((cur) => !cur)}
        className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"
      ></i>
    </div>
  );
}

export default Navbar;
