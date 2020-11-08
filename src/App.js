import React, { Component } from 'react';
import axios from 'axios';
import UploadImage from './UploadImage';
import "./App.css";
import loadingAnimation from './emoji_gif.gif';
<<<<<<< HEAD
=======

>>>>>>> StyleUploadImg.js
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
      <section>
        {isLoading ? (
          <div className="loader">
            <span className="loader__text"> 
<<<<<<< HEAD
            <img src={loadingAnimation} alt="loading..." />
=======
            <img style={{width: '150%',
        height: '150%',}}src={loadingAnimation} alt="loading..." />
>>>>>>> StyleUploadImg.js
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
