import React from "react";
import { styles } from "../util/style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../util/constants";
import { SocialMedia } from "./index";
import FooterLinks from "./FooterLinks";
const Footer = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col mr-10 justify-start">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="w-[250px] h-[72px] object-contain cursor-pointer"
            />
          </a>

          <p className={`${styles.paragraph} mt-4 max-w-[350px] `}>
            To'lovlarni oson, ishonchli va xavfsiz qilishning yangi usuli
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0  mt-10">
          {footerLinks.map((link) => (
           <FooterLinks link={link}/>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-montserrat font-normal text-center text-[18px] leading-[27px] text-white ">
          Copyright © 2026 Vonni.All Right Reserved
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, idx, element) => (
            <SocialMedia social={social} idx={idx} element={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
