import React from "react";
import { styles } from "../util/style";
import { discount } from "../assets";

const Home = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* Information */}
      <div
        className={` flex-1 ${styles.flexStart} flex-col  xl:px-0 sm:px-16 px-6`}
      >
        {/* Discount information */}
        <div className=" flex flex-row items-center gap-[10px] py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
            <img src={discount} alt="discount"  className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph}`}> <span className="text-white">1 oylik</span>  hisob uchun  <span className="text-white"> 20%</span> chegirma  </p>
        </div>
        {/* Title */}
        <div></div>

        {/* Descritpion */}
        <div></div>
      </div>

      {/* Animation image */}
      <div></div>
    </section>
  );
};

export default Home;
