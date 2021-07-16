import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const[data, setData]=useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
       setData(res.data)
    })
      .catch(err => {
        alert(err)
      })
  }, [])
  
  const Styled=styled.div`
  
  h1{
  font-family: 'Monoton', cursive;
  text-align:center;
  font-size: 50px;
  color:#6A5ACD;
  :hover{
    color:#FFFFF0;
    background-color:black;
    }
  }
  
  `
  
  return (
    <Styled>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
</style>
      <h1 className="Header">STAR &nbsp; WARS &nbsp; CHARACTERS &nbsp;&nbsp;&nbsp; &nbsp; &gt;</h1>
      {
      data.map((i)=>{
        return <Character key={i.name} data={i}/>
      })
        
      }
    </Styled>
  );
}

export default App;
