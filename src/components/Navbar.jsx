import { styles } from "../util/style";
import { navigationLinks } from "../util/constants";
import { close, logo, menu } from "../assets";
import { useState } from "react";
const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(true);
  const [active, setActive] = useState("home");
  const toggleHandler = () => setToggleNav((prev) => !prev);
  const activeHandler = (id) => setActive(id);
  return (
    <div className={` w-full ${styles.flexBetween} py-6 `}>
      {/* logo */}
      <div className={`${styles.heading}`}>
        <img
          src={logo}
          alt="logo"
          className="w-[140px] h-[35px] cursor-pointer"
        />
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* Navigation link */}
        {navigationLinks.map((item, key, navigationLinks) => {
          return (
            <li
              key={item.id}
              className={`whitespace-nowrap font-montserrat font-normal cursor-pointer text-[16px] text-lightWhite 
                ${key === navigationLinks.length - 1 ? "mr-0" : "mr-10"}
                     ${active === item.id ? "text-white" : "text-lightWhite"}
                 hover:text-white transition-all duration-500 `}
                 onClick={()=>activeHandler(item.id)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>

      <div
        className={`sm:hidden flex  w-6 h-6 min-w-6 min-h-6 shrink-0 flex-1 justify-end items-center text-white`}
      >
        <img
          src={toggleNav ? menu : close}
          alt="menu"
          className={`w-[30px] h-[30px] object-contain `}
          onClick={toggleHandler}
        />

        <div
          className={`${toggleNav ? "hidden" : "flex"} p-6 top-20 right-0 left-0 absolute w-full sidebar bg-black-gradient `}
        >
          <ul className="list-none flex justify-center items-center flex-1">
            {/* Navigation link */}
            {navigationLinks.map((item, key, navigationLinks) => {
              return (
                <li
                  key={item.id}
              className={`whitespace-nowrap font-montserrat font-normal cursor-pointer text-[16px] text-lightWhite 
                ${key === navigationLinks.length - 1 ? "mr-0" : "mr-10"}
                     ${active === item.id ? "text-white" : "text-lightWhite"}
                 hover:text-white transition-all duration-500 `}
                 onClick={()=>activeHandler(item.id)}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
