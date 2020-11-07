import React, { Component } from 'react';
import axios from 'axios';
import UploadImage from './UploadImage';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isLoading: true
    }
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2500)
    //sample post api call
    axios.post('/api/custom', { newText: 'Hello' }).then((res) => this.setState({ text: res.data }));

  }


  render() {
    const { text } = this.state;
    const { isLoading } = this.state;
    return (
      <section className= "container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text"> Loading...</span>
          </div>
        ) : (
            <UploadImage/>
          )}
      </section>
    )
  }
}

export default App;
