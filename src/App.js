import React, {Component} from 'react';
import './App.css';
import PokeForm from './PokeForm';
import DisplayInfo from './DisplayInfo'




class App extends React.Component {
 constructor(props){
   super(props)
  this.state = { 
   
  }
  }

 viewAll(){

  console.log("I was clicked")
  var allImage = "";
  var allName ="";

  for(let i = 1; i < 720; i++)
  fetch('https://pokeapi.co/api/v2/pokemon/' + i)
  .then(response => response.json())
  .then(data=>{
    allImage = data['sprites']['front_default']; 
    allName = data['forms'][0]['name'];
  })
  .catch("There is an error getting the Pokemon!")

  return(
    <div>
    <ul class = "PokeCard">
      <li><img src= {allImage}></img></li>
      <li>{allName}</li>
    </ul>
    </div>
  )
}


   
  //}
  handleSubmit(event) {
    event.preventDefault();
    let name = event.target.searchBox.value.toLowerCase();
    let url = 'https://pokeapi.co/api/v2/pokemon/' + name;

   
    fetch(url)
         .then(response => response.json())
         .then(data => {
          var typesArr = data['types']
          var pokeName = data['forms'][0]['name'];
          var pokeImage = data['sprites']['front_default'];
          var pokeHP = data['hp']
          pokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1)
          var pokeType = '';
          
          for(var j = 0; j < typesArr.length; j++){
            if(j === typesArr.length-1){
              pokeType += typesArr[j]['type']['name'] + ' '
            }else{
              pokeType += typesArr[j]['type']['name'] + ', '
            }
          }

          console.log("HP: ", pokeHP)
          //console.log("This: ", this)
          this.setState({
            pokeName: pokeName,
            pokeType: pokeType,
            pokeImage: pokeImage,
            pokeHP: pokeHP
          })

        
          
               
      })
  }  

 
                
  
  render(){
    return (
    <div>
      <PokeForm onSubmit={this.handleSubmit.bind(this)}/>
      <button class ="View All" onClick={()=>this.viewAll}>View All Pokemon!</button>
      <DisplayInfo name ={this.state.pokeName} type={this.state.pokeType} img={this.state.pokeImage} hp ={this.state.pokeHP} />
    </div>
    )
  }
  
}
    



export default App;







































































































































