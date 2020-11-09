import React from "react";
import backgroundImg from "./background_img.jpg";
import axios from "axios";

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      imageUrl: null,
      imageSrc: "",
      type: null,
    };
  }

  handleChange = (e) => {
    console.log(e.target.files);
    console.log(e.target.name);
    const file = e.target.files[0];
    let img = new Image();
    var objectUrl = URL.createObjectURL(file);

    img.src = objectUrl;

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageSrc: fileReader.result });
    };
    fileReader.readAsDataURL(e.target.files[0]);

    this.setState({
      type: e.target.name,
    });
  };

  // handleUpload = async () => {
  //   const { imageUrl, type } = this.state;
  //   const formData = new FormData();
  //   formData.append("file", imageUrl);
  //   try {
  //     const res = await fetch("api/image", {
  //       method: "POST",
  //       body: {
  //         formData,
  //       },
  //     });
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  handleUpload = async () => {
    const { imageSrc, type } = this.state;
    axios.post('/api/imageUpload', { src: imageSrc, emoType: type })
    .then((res) => console.log(res));
  };

  render() {
    console.log("ImageSrc: ", this.state.imageSrc);
    return (
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
        <div className='inputContainer'>
          <input
            type='file'
            name='random'
            accept='.jpg,.jpeg,.png'
            onChange={this.handleChange}
          />
          <input
            type='file'
            name='mymood'
            accept='.jpg,.jpeg,.png'
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.handleUpload}> Upload </button>
      </div>
    );
  }
}

export default UploadImage;
