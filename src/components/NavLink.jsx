import React from "react";

const NavLink = ({ navLink, key, navigationLinks, activeHandler, active }) => {
  return (
    <li
      key={navLink.id}
      className={`whitespace-nowrap font-montserrat font-normal cursor-pointer text-[16px] text-lightWhite 
                ${key === navigationLinks.length - 1 ? "mr-0" : "mr-10"}
                     ${active === navLink.id ? "text-white" : "text-lightWhite"}
                 hover:text-white transition-all duration-500 `}
      onClick={() => activeHandler(navLink.id)}
    >
      <a href={`#${navLink.id}`}>{navLink.title}</a>
    </li>
  );
};

export default NavLink;
