import React from 'react';
import './App.css';

class PokeForm extends React.Component{
    constructor(props){
        super(props)

    }
      render(){
    return (
        <form onSubmit={this.props.onSubmit} >
            <input type="text" name = "searchBox"/>
            <button type="submit">Submit</button>
        </form>
    );
      }
}   

export default PokeForm;































































































































































































































