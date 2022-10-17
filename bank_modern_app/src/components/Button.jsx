import React from 'react'

const Button = ({styles , text}) => (
  <button type='button' className={`rounded-[10px] py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}` }>
    {text}
  </button>
)
export default Button