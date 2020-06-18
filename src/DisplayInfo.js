import React from 'react';
import './App.css';

function DisplayInfo (props){
       return (
        <div className = "PokeCard">
              <div className = "PokeCardHP">HP: {props.hp}</div>
       
              <div className = "PokeCardName">{props.name}</div>
              <img src={props.img} />
              <div>{props.type}</div>
        
        </div>
       )
} 

export default DisplayInfo