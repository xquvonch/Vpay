import React from "react";

const SocialMedia = ({ social, idx, element }) => {
  return (
    <div>
      <a href={social.link}  target="_blank" rel="noopener noreferrer">
        <img
          key={social.id}
          src={social.icon}
          alt={social.id}
          className={`w-[21p] h-[21px] object-contain cursor-pointer ${idx !== element.length - 1 ? "mr-6" : "mr-0"}`}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
