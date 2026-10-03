import React from 'react'

const FooterLinks = ({link}) => {
  return (
    <div
              key={link.id}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-montserrat font-medium text-[18px] leading-[27px] text-white">
                {link.title}
              </h4>

              <ul className="list-none mt-4">
                {link.links.map((item, idx) => (
                  <li
                    key={item.name}
                    className={`font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite hover:text-secondary cursor-pointer ${idx !== link.links.length - 1 ? "mb-4" : "mb-0"}`}
                  >
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
  )
}

export default FooterLinks
