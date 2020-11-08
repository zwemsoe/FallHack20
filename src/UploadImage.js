import React from 'react';
import backgroundImg from './background_img.jpg';

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      selectedFile: null
    }
  }

  getEmojis = () => {

  };


  fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  fileUploadHandler = () => {

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
            name="pic"
            onChange={this.fileSelectedHandler}
            ref={randomInput => this.randomInput = randomInput}
          />
          <input
             style={{ display: 'none' }}
            type="file"
            name="pic"
            onChange={this.fileSelectedHandler}
            ref={moodInput => this.moodInput = moodInput}
          />

          <button onClick={()=>this.randomInput.click()}>Random</button>
          <button onClick={()=>this.moodInput.click()}>My Mood</button>



        </div>

        <button onClick={this.fileUploadHandler}>Upload</button>


      </div>





    )
  }

}

export default UploadImage;
