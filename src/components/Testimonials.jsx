import React from 'react'
import { styles } from '../util/style'

const Testimonials = () => {
  return (
    <div className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-0'  ></div>
    </div>
  )
}

export default Testimonials
