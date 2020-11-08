import React from 'react';
import backgroundImg from './background_img.jpg';

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  getEmojis = () => {

  };


  fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
  }

  render() {
    const { isLoading } = this.state;


    return (
      <form action="http://127.0.0.1:5000/image" enctype="multipart/form-data" method="POST">
        <div className="container">
          <h1 className="header">App Title</h1>
          <img style={{
            width: '40%',
            height: '40%',
          }} src={backgroundImg} alt="backgroundImg" />
          <h2 className="description">AI TOOLS RECOGNISE YOUR FACIAL EXPRESSION AND GIVE YOU AN EMOJI</h2>

          <div className="inputContainer">
            <input
            
             type="file" 
             name="pic" 
             />
            <input
            
             type="file" 
             name="pic" 
             />

            

          </div> 

          <input type="submit" value="upload a file" />


        </div>



      </form>

    )
  }

}

export default UploadImage;
