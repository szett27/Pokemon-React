import React from 'react';
import './App.css';
import DisplayInfo from './DisplayInfo'




class DisplayAll extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pokeData: {},
            

        }
    }


    async componentDidMount(){ 
        let pokeNames = [];
        let pokeImages = [];
        for(let i = 1; i < 10; i++){
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i);
            const json = await response.json();

            pokeNames.push(json['forms'][0]['name']);
            pokeImages.push(json['sprites']['front_default']);

            var pokeData = {};
            pokeNames.forEach((Name,i)=>{
             pokeData[Name] = pokeImages[i]
                
            });
    
           
    
            
            this.setState({
                pokeData: pokeData,
            })
           
        }

      



    } 
    



    

    render(){   

        //this is where the code goes awry, for some reasaon I can't pass props to Display Info
        //console log displays the props passed into DisplayInfo correctly
        //no idea why it's not working

    let displayObject = this.state.pokeData;
    let displayObjArray = Object.entries(displayObject);
    displayObjArray.forEach(entry=>console.log(entry[0] + " " + entry[1]))
 
        return(
              <ul>
                    {displayObjArray.forEach(entry=><li><DisplayInfo name ={entry[0]} img={entry[1]} /></li>)}
              </ul>
            //    {content}

        )   
    
        }
} 

export default DisplayAll