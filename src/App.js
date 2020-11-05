import React, { Component} from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      text: "",
    }
  }
  
  componentDidMount() {
    //sample post api call
    axios.post('/api/custom', {newText: 'Hello'}).then((res) => this.setState({text: res.data}));
  }
  
  
  render(){
    const {text} = this.state;
    return (
      <div>
        <h1>{text}</h1>
      </div>
    )
  }
} 

export default App;
