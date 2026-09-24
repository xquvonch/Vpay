import React from "react";
import { styles } from "../util/style";
import { discount, robot, robot1 } from "../assets";
import Button from "./Button";
import Billing from "./Billing";

const Home = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} overflow-hidden`}
    >
      <div className={`${styles.flexStart} flex-1 md:my-0 my-10 `}>
        <img
          src={robot1}
          alt="Robot"
          className="w-[100%] h-[100%] relative z-10 rounded-lg"
        />
      </div>
      {/* Information */}
      <div
        className={` flex-1 ${styles.flexStart} flex-col  xl:px-0 sm:px-16 px-6 relative`}
      >
        {/* Discount information */}
        <div className=" flex flex-row items-center gap-[10px] py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph}`}>
            {" "}
            <span className="text-white">1 oylik</span> hisob uchun{" "}
            <span className="text-white"> 20%</span> chegirma{" "}
          </p>
        </div>
        {/* Title */}
        <div className="w-full">
          <h1 className={`${styles.heading1}`}>
            Yangi Avlod <br />{" "}
            <span className="text-gradient">To'lov Usuli</span>{" "}
          </h1>
        </div>

        {/* Descritpion */}
        <p className={`${styles.paragraph} mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias et
          tempora facere corporis. Quisquam commodi iste saepe nobis eos culpa
          officia unde, molestias ratione veritatis impedit delectus aliquam
          minus corporis.
        </p>

        {/* Getting started */}
        <Button styles={`mt-5`} />
        {/* Gradientbackground */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 " />
      </div>

      {/* Animation image */}

    </section>
  );
};

export default Home;
