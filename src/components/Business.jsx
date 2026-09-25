import React from "react";
import { layout, styles } from "../util/style";
import Button from "./Button";
import { features } from "../util/constants";
import FeaturesCard from "./FeaturesCard";

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Biznes rivojlantiring <br className="sm:block hidden" /> pulni hal
          qilamiz.{" "}
        </h2>
        <p className={`  max-w-[550px] mt-5 ${styles.paragraph}`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic tempora,
          eveniet iusto quod consequuntur voluptatibus impedit ipsam eos ut
          quidem libero adipisci blanditiis pariatur, laboriosam saepe, aperiam
          nihil. Doloribus, error!
        </p>
        <Button styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImage} flex-col text-white`}>
        {features.map((item, key) => (
          <FeaturesCard key={item.id} {...item} idx={key} />
        ))}
      </div>
    </section>
  );
};

export default Business;
