import React from 'react'

type InputProps = {
    placeholder : string
    type?:string
}
const Input = ({placeholder,type="text"}:InputProps) => {
  return (
    <input type={type} className='px-4 py-4 rounded-lg min-w-full mb-4' placeholder={placeholder}/>
  )
}

export default Input