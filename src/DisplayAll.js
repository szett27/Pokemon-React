import React from 'react';
import './App.css';
import DisplayInfo from './DisplayInfo'

var pokeNames = [];
var pokeImages = [];
var pokeArray = [];

class DisplayAll extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }


    componentDidMount(){ 
     
        for(let i = 1; i < 3; i++){
        fetch('https://pokeapi.co/api/v2/pokemon/' + i)
        .then(response => response.json())
        .then(data=>{
           pokeNames.push(data['forms'][0]['name']);
           pokeImages.push(data['sprites']['front_default']);
        
        for(let i = 0; i < pokeNames.length; i++){
            pokeArray[i] = [];
            pokeArray[i][0] = pokeNames[i];
            pokeArray[i][1] = pokeImages[i];
        }
      
     })
    } 
    }



 

    render(){   
    let everything;
    // console.log("Array Map: ", pokeArray.map((name)=> name))
    
    everything = <div>{pokeArray.map((name, image)=><DisplayInfo name={name} img = {image}/>)}</div> //<button type = "radio">Add to Collection</button>
     console.log("Everything: ", everything)
    
        return(
            <ul>
               {everything}
            </ul>

        )   
    }
  
} 

export default DisplayAll