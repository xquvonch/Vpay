import { styles } from "../util/style";
import { navigationLinks } from "../util/constants";
import { close, logo, menu } from "../assets";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(true);
  const [active, setActive] = useState("home");
  const toggleHandler = () => setToggleNav((prev) => !prev);
  const activeHandler = (id) => setActive(id);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);

      setScrolled(window.scrollY > 50);
    };

    handleScroll(); // sahifa yuklanganda ham tekshirib olish
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`navbar w-full ${styles.flexBetween} sm:px-16 px-6 py-6 fixed top-0 left-0 z-20 z-10000  ${scrolled ? "scrolled" : ""}`}
    >
      {/* logo */}
      <div className={`${styles.heading1}`}>
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className="w-[140px] h-[35px] cursor-pointer"
          />
        </a>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* Navigation link */}
        {navigationLinks.map((navLink, key, navigationLinks) => {
          return (
            <NavLink
              navLink={navLink}
              key={key}
              navigationLinks={navigationLinks}
              activeHandler={activeHandler}
              active={active}
            />
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
            {navigationLinks.map((navLink, key, navigationLinks) => {
              return (
                <NavLink
                  navLink={navLink}
                  key={key}
                  navigationLinks={navigationLinks}
                  activeHandler={activeHandler}
                  active={active}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
