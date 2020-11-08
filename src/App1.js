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
            <span className="loader__text"> 
            <img src={loadingAnimation} alt="loading..." />
            </span>
          </div>
        ) : (
            <UploadImage/>
          )}

            
                <header className="text-gray-700 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                  <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-orange-500 rounded-full" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path/&gt;
                    </svg>
                    <span className="ml-3 text-xl">project_name</span/&gt;
                  </a>
                
                    </svg>
                  </button>
                  </div>
              </header>
              <section className="text-gray-700 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                  <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://image.freepik.com/free-vector/minimalist-set-emojis_23-2147586780.jpg"/>
                  <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">some description</h1/>
                    <p className="mb-8 leading-relaxed">FACIAL EXPRESSION EMOJI</p/>
                    <div className="flex justify-center">
                      <button href="/"className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">random</button/>
                      <button href=""className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">my mood</button/>
                    </div/div>>
                  </div>
                </div>
              </section>
      </section>
    )
  }
}

export default App;