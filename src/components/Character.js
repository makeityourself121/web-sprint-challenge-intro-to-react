// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const Style=styled.div`
width:80%;
display: flex;
justify-content: space-between;
padding:8px;
border:1px solid green;
margin:2%auto;
font-size: 25px;
font-family: 'Geostar Fill', cursive;
span{
    border:1px solid black;
    padding:5px;
    border-radius: 10px 20px;
    background-color: #696969;
    color:#483D8B;
    :hover{
        background-color: #2F4F4F;
        color:black;
    }
}
:hover{
    background-color: #D3D3D3;
    color:#483D8B;
}

`
export default function Character(props){
    const {data}=props
    
    
    return(
        <div>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Geostar+Fill&display=swap');
</style>
           <Style>{data.name} 
           <span>{data.birth_year}</span>
           </Style>
        
        </div>
    )
}

