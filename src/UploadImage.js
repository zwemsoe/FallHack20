import React from 'react';
import backgroundImg from './background_img.jpg';
import axios from 'axios';

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      imageUrl: null,
      type: null,
    }
  }

  handleChangeImage = (ev) => {
    console.log(ev.target.files);
    console.log(ev.target.name);
    this.setState({
      imageUrl: ev.target.files[0],
      type: ev.target.name,
    });
  }

  fileUploadHandler = () => {
    const {imageUrl, type} = this.state;
    axios.post("/image", {imageUrl: imageUrl, type: type}).then(response => console.log(response));
  }

  render() {
    const { isLoading } = this.state;
    return (


      <div className="container">
        <h1 className="header">App Title</h1>
        <img style={{
          width: '40%',
          height: '40%',
        }} src={backgroundImg} alt="backgroundImg" />
        <h2 className="description">AI TOOLS RECOGNISE YOUR FACIAL EXPRESSION AND GIVE YOU AN EMOJI</h2>

        <div className="inputContainer">
          <input
            style={{ display: 'none' }}
            type="file"
            name="random" 
            accept= ".jpg,.jpeg,.png"
            onChange={this.fileSelectedHandler}
            ref={randomInput => this.randomInput = randomInput}
          />
          <input
             style={{ display: 'none' }}
            type="file"
             name="mymood" 
             accept= ".jpg,.jpeg,.png"
            onChange={this.fileSelectedHandler}
            ref={moodInput => this.moodInput = moodInput}
          />

          <button style={{marginRight: 15 }} onClick={()=>this.randomInput.click()}>Random</button>
          <button style={{marginLeft: 15 }} onClick={()=>this.moodInput.click()}>My Mood</button>



        </div>

        <button onClick={this.fileUploadHandler}>Upload</button>


      </div>



    )
  }

}

export default UploadImage;
