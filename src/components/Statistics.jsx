import React from "react";
import { styles } from "../util/style";
import { statistics } from "../util/constants";

const Statistics = () => {
  return (
    <div className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-6`}>
      {statistics.map((item) => (
        <div
          key={item.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className=" text-white font-montserrat font-semibold xs:text-[41px] text-[30px] xs:leading-[53px] leading-[43px]">
            {" "}
            {item.value}
          </h4>
          <p className="font-monserrat font-normal xs:text-[20px] text-[16px] xs:leading-[26px] leading-[22px] text-gradient uppercase ml-3">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
