import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const Brand = () => {
  return (
    <p className="text-2xl cursor-pointer font-medium menuItems">
      Logo <span className="text-amber-400 font-medium">Here</span>
    </p>
  );
};

const MenuItems = () => {
  return (
    <div className="lg:flex hidden items-center gap-10 justify-between">
      {["Home", "About Us", "Services", "Projects", "Blogs"].map((item) => (
        <p className="text-base capitalize cursor-pointer menuItems">{item}</p>
      ))}
    </div>
  );
};

const MenuIcon = () => {
  return (
    <div className="cursor-pointer w-6 h-6 lg:hidden block menuItems">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
            fill="#0F1729"
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
};

const Header = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    gsap.set(".menuItems", {
      x: -100,
      opacity: 0,
    });

    gsap.to(".menuItems", {
      x: 0,
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".header",
        toggleActions: "resume pause restart none",
      },
    });
  }, []);
  return (
    <div className="flex items-center justify-between lg:p-10 p-5 lg:px-20 header">
      <Brand />
      <MenuItems />
      <MenuIcon />
    </div>
  );
};

export default Header;
