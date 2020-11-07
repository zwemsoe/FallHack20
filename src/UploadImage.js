import React from 'react';

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  getEmojis = () => {
    // const {
    //   
    // } = await axios.get(
    //   //url
    // );
    // this.setState({ , isLoading: false });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2500)
  };


  fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
  }

  render() {
    const { isLoading } = this.state;


    return (
      <section className="container">
        <h1>App Title</h1>
        {isLoading ? (
          <div className="loader">
            <span className="loader__text"> Getting Emojis...</span>
          </div>
        ) : (
            <h2>Upload Image</h2>
          )}
        <input type="file" onChange={this.fileSelectedHandler}/>
        <button className= "Submit__button" onClick={this.getEmojis}>Submit</button>
      </section>
    )
  }

}

export default UploadImage;
