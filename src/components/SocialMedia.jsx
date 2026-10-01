import React from "react";

const SocialMedia = ({ social, idx, element }) => {
  return (
    <div>
      <img
        key={social.id}
        src={social.icon}
        alt={social.id}
        className={`w-[21p] h-[21px] object-contain cursor-pointer ${idx !== element.length - 1 ? "mr-6" : "mr-0"}`}
      />
    </div>
  );
};

export default SocialMedia;
