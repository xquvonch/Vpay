import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={` text-white py-4 px-6 font-montserratt font-medium text-[18px] bg-blue-gradient rounded-sm outline-none ${styles}`}>
      Boshlash
    </button>
  )
}

export default Button
