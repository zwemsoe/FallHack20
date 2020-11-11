import React, { Component } from "react";
import UploadImage from "./components/UploadImage";
import loadingAnimation from "./assets/emoji_gif.gif";
import backgroundImg from "./assets/background_img.jpg";


class App extends Component {
  constructor(props) {
    super(props);
    this.uploadImageElement = React.createRef();
    this.state = {
      isLoading: true,
      imageUrl: null,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2500);
  }

  setLoading = () => {
    this.setState({
      isLoading: true,
    })
  }

  handleClick = (type) => {
    if (type === "random") {
      this.uploadImageElement.current.startModal(type)
    } else {
      this.uploadImageElement.current.startModal(type)
    }
  };

  uploadCallback = (url) => {
    let imageUrl = "data:image/png;base64," + url;
    if(url === "no_face"){
      imageUrl = url;
    }
    this.setState({
      imageUrl: imageUrl,
      isLoading: false,
    });
  };

  renderLoading = () => {
    return (
      <div className='loader'>
        <span className='loader__text'>
          <img
            style={{ width: "100vw", height: "100vh" }}
            src={loadingAnimation}
            alt='loading...'
          />
        </span>
      </div>
    )
  }

  renderLanding = () => {
    return (
      <div className="container">
        <h1 className='header'>EmojiMyPic</h1>
        <img
          style={{
            width: "auto",
            height: "auto",
          }}
          src={backgroundImg}
          alt='backgroundImg'
        />
        <h2 className='description'>
          AI TOOLS RECOGNISE YOUR FACIAL EXPRESSION AND GIVE YOU AN EMOJI
        </h2>
        <div className='row'>
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
    );
  }

  renderImage = () => {
    const {imageUrl} = this.state;
    return (
      <div className="container-fluid">
        <div className="display-grid-center">
        <h1>Result: </h1>
          <div className="image-div">
            {imageUrl === "no_face" ? 
            <h2>No face detected!</h2>
            :
            <div>
            <div className= "row">
              <div className="display-grid-center">
              <a className="btn btn-primary" href={imageUrl} download="emojiMyPic.jpg">Download</a>
              </div>
            </div>
            <div style={{marginTop: "1em"}}></div>
            <div className="row">
                <img
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                    src={imageUrl}
                    alt='resultImg'
                  />
            </div>
            </div>
            }
          </div>
        </div>
      </div>
    );
  }

  conditionalRender = () => {
    const { isLoading, imageUrl } = this.state;
    if(isLoading == true && imageUrl == null){
      return (
        <div>
          {this.renderLoading()}
        </div>
      )  
    } else if(imageUrl != null){
      return (
        <div>
          {this.renderImage()}
        </div>
      )  
    } else {
      return (
        <div>
          {this.renderLanding()}
        </div>
      )  
    }

  }

  render() {
    return (
      <div className='container2'>
        {this.conditionalRender()}
        <UploadImage
          ref={this.uploadImageElement}
          setLoading= {this.setLoading}
          parentCallback={this.uploadCallback}
        />
      </div >
    );
  }
}

export default App;
