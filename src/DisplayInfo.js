import React from 'react';
import './App.css';

class DisplayInfo extends React.Component{
       constructor(props){
              super(props)
       }

       render(){
       console.log("Name", this.props.name)
       console.log("Image", this.props.img)
       return (
        <div className = "PokeCard">
               <div className = "PokeCardName">{this.props.name}</div>
              <img src={this.props.img} />
              <div>{this.props.type}</div>
        
        </div>
       )
       }
} 

export default DisplayInfo