import React from 'react';
import './Content.css';

const Content = ({details}) => {
  
  
  const renderContent = () =>{
    if(details){
      return(<div className='pokemon__content'>
        <img src={details?.sprites?.front_shiny} width='200px'/> 
        <h1>{details.name}</h1>
      </div>)
    }else{
      return<div>LOADING</div>
    }
  }

  return(<div className='content__container'>
    {renderContent()}
  </div>)

};

export default Content;
