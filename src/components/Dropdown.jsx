import React, {useState} from 'react';
import './Dropdown.css';

const Dropdown = ({data, getPokemon}) => {





  const renderData = data?.map((item,i) =>{
    return <option key={i}>{item.name}</option>
  })

  const onChangeValue = (e) =>{
    getPokemon(e.target.value)
  }
 

  return <select onChange={(e) => onChangeValue(e)}>
      {renderData}
  </select>;
};

export default Dropdown;
