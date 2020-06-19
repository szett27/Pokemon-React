import React from 'react';
import './App.css';

class DisplayInfo extends React.Component{
       constructor(props){
              super(props)
              this.state ={
              }
       }




       

       render(){
       return (
        <div className = "PokeCard">
               <div className = "PokeCardName">{this.props.name}</div>
              <img src={this.props.img} alt = {this.props.name} />
              <div>{this.props.type}</div>
              <button id="collection" onClick={this.props.onSubmit}>Add to Collection</button>
        
        </div>
       )
       }
} 

export default DisplayInfo