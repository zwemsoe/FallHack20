import React, { Component } from 'react';
import axios from 'axios';
import UploadImage from './UploadImage';
import "./App.css";
import loadingAnimation from './emoji_gif.gif';
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
      this.setState({ isLoading: false })
    }, 2500)
  }


  render() {
    const { text } = this.state;
    const { isLoading } = this.state;
    return (
      <section className="container2" >
        {isLoading ? (
          <div className="loader">
            <span className="loader__text"> 
            <img style={{width: '150%',
        height: '150%',}}src={loadingAnimation} alt="loading..." />
            </span>
          </div>
        ) : (
            <UploadImage/>
          )}


      </section>
    )
  }
}

export default App;
