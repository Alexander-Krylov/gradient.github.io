import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.validateColor = this.validateColor.bind(this);
    this.handleChangeColor1 = this.handleChangeColor1.bind(this);
    this.handleChangeColor2 = this.handleChangeColor2.bind(this);

    this.state = {
      color1: '#b588f7',
      color2: '#1de5e2',
      input1: '',
      input2: ''
    }
  }

  handleChangeColor1(event){
    this.setState({
      input1: event.target.value
    });
  }

  handleChangeColor2(event){
    this.setState({
      input2: event.target.value
    });
  }

  handleClick(){
    let col1 = this.state.input1;
    let col2 = this.state.input2;

    if(this.validateColor(col1) && this.validateColor(col2)){
      this.setState({
        color1: col1,
        color2: col2
      })
    }
  }

  validateColor(color){
    if(color[0] === '#'){
      if(color.length === 7){
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <div 
        className="App" 
        style={{backgroundImage: 'linear-gradient(to bottom,' + this.state.color1 +' , ' + this.state.color2 + ')'}}>
        
        <div className="container">
          <div className="color_area">
            <div className="color_item">
              <label for="color_1">Color 1: </label>
              <input 
                type="text" 
                name="color_1" 
                id="color_1" 
                placeholder="#rrggbb"
                value={this.state.input1}
                onChange = {this.handleChangeColor1}/>
            </div>
           
            <div className="color_item">
              <label for="color_2">Color 2: </label>
              <input 
                type="text" 
                name="color_2" 
                id="color_2" 
                placeholder="#rrggbb"
                value={this.state.input2}
                onChange = {this.handleChangeColor2}/>
            </div>
          </div>

          <div className="button_area">
            <button onClick={this.handleClick}>GO</button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;