import React from 'react';

const Input = ({handleChange,value}) => {
  return (
    <input type="text" onChange={handleChange} value={value}/>
  )
}

export default Input;