import React, {useEffect, useState} from 'react';
import './App.css';
import Content from './components/Content';
import Dropdown from './components/Dropdown';
import Button from './components/Button';
import { listPokemon,getPokemon } from './utils/pokeapi';

const App =() =>{

    const [list, setList] = useState([]);
    const [name, setName] = useState(1);
    const [details,setDetails] = useState([])

    useEffect(() =>{
      const getList = async() =>{
        try{
          const response = await listPokemon()
          setList(response.results)
        }catch(err){
          console.log(err)
        }
      }
      getList(); 
    },[])


    useEffect(() =>{
      const getDetails = async() =>{
        try {
          const response = await getPokemon(name);
          setDetails(response);
        } catch (err) {
          console.log(err);
        }
        
        
      }
      getDetails()
      
    },[name])

    const nextPokemon = async() =>{
      if(details){
        const response = await getPokemon(details.id+1)
        setDetails(response)
      }
    }


    const prevPokemon = async() =>{
      if(details && details.id > 1){
        const response = await getPokemon(details.id-1)
        setDetails(response)
      }
    }


    return (
      <div className="app">

          <div className="app__pokedex">
            <div className='pokedex__dropdown'>
            <Dropdown getPokemon={(e) =>setName(e)} data={list}/>
            </div>
           <div className='pokedex__content'>
           <Content details ={details}/>
           </div>
           
            <div className="pokedex__pagination">
              <Button onClickBtn={(e) =>prevPokemon(e)}>Previous</Button>
              <Button onClickBtn={(e) => nextPokemon(e)}>Next</Button>
            </div>
          </div>
     
      </div>
    );
}
export default App