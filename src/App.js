import React, { Component } from "react";
import UploadImage from "./UploadImage";
import loadingAnimation from "./emoji_gif.gif";
import backgroundImg from "./background_img.jpg";


class App extends Component {
  constructor(props) {
    super(props);
    this.uploadImageElement = React.createRef();
    this.state = {
      text: "",
      isLoading: true,
      imageUrl: null,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2500);
    //sample post api call
    //axios.post('/api/custom', { newText: 'Hello' }).then((res) => this.setState({ text: res.data }));
  }

  handleClick = (type) => {
    if (type === "random") {
      this.uploadImageElement.current.startModal(type)
    } else {
      this.uploadImageElement.current.startModal(type)
    }
  };

  uploadCallback = (url) => {
    this.setState({
      imageUrl: url,
    });
  };

  render() {
    const { text } = this.state;
    const { isLoading } = this.state;
    return (
      <div className='container2'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'>
              <img
                style={{ width: "150%", height: "150%" }}
                src={loadingAnimation}
                alt='loading...'
              />
            </span>
          </div>
        ) : (
          <div className='container'>
            <h1 className='header'>App Title</h1>
            <img
              style={{
                width: "40%",
                height: "40%",
              }}
              src={backgroundImg}
              alt='backgroundImg'
            />
            <h2 className='description'>
              AI TOOLS RECOGNISE YOUR FACIAL EXPRESSION AND GIVE YOU AN EMOJI
            </h2>
            <div className= 'row'>
            <button
              style={{ marginRight: 15 }}
              className="btn btn-secondary"
              onClick={() => this.handleClick("random")}
            >
              Random
            </button>
            <button
              style={{ marginLeft: 15 }}
              className="btn btn-secondary"
              onClick={() => this.handleClick("mymood")}
            >
              My Mood
            </button>
            </div>
          </div>
        )}
        <UploadImage
          ref={this.uploadImageElement}
          parentCallback={this.uploadCallback}
        />
      </div>
    );
  }
}

export default App;
