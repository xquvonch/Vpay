import React from "react";
import { layout, styles } from "../util/style";
import { apple, bill, googlePlay } from "../assets";
import { AppStores } from "../util/constants";

const Billing = () => {
  return (
    <section id="features" className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImageReverse}>
        <img
          src={bill}
          alt="bill"
          className={`w-[100%] h-[100%] relative z-[5]`}
        />
        <div className="absolute z-[3]  -left-1/2 w-[50%] h-[50%] rounded-full top-0 white__gradient" />
        <div className="absolute z-[0] -left-1/2    w-[50%] h-[50%] rounded-full bottom-0 pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Hisob kitob va fakturial <br className="sm:block" /> osongina
          boshqaring
        </h2>

        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          distinctio labore error quos voluptatum nihil amet veritatis sit
          obcaecati placeat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6 gap-[10px]">
        {AppStores.map((item)=>(
            <div className={`w-[240px] h-[64px] rounded-full ${styles.flexCenter} bg-lightBlue`}>
            <img
              src={item.img}
              alt={item.name}
              className="w-[200px] h-[50px] object-contain  cursor-pointer"
            />
          </div>
        ))}
          
        </div>
      </div>
    </section>
  );
};

export default Billing;
