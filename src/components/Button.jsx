import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button'  className={`opacity-65 transition-all hover:opacity-100 py-3 px-6 font-montserratt font-medium text-[18px] bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Boshlash
    </button>
  )
}

export default Button
