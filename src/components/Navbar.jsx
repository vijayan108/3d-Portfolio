import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { styles } from "../style";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full items-center py-5  top-0 z-20 sticky bg-primary`}
    >
      <div className="w-ful max-w-7xl inline-flex justify-between items-center  mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 left-6"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10  h-10 object-contain" />
          <span className=" text-4xl font-bold cursor-pointer text-white">
            Vijayan R
          </span>
        </Link>
        <ul className=" list-none hidden sm:flex text-3xl flex-row flex-1 right-24 absolute mr-1 gap-16">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : " text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className=" absolute sm:hidden right-2 flex justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[25px] h-[25px] cursor-pointer object-contain" onClick={() => setToggle(!toggle)} />
              <div className={`absolute z-10 rounded-xl top-16 mx-4 my-2 min-w-[140px] right-0 w-full p-6 black-gradient ${toggle ? "flex" : "hidden"}`}>
                <ul className="list-none text-3xl w-full flex flex-col gap-8 text-center">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-white" : " text-secondary"
                      } hover:text-white text-[18px] font-medium cursor-pointer`}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
