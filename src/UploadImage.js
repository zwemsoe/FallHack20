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
    //   data: {
    //     data: { movies }
    //   }
    // } = await axios.get(
    //   //url
    // );
    // this.setState({ movies, isLoading: false });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2500)
  };

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
        <button className= "Submit__button" onClick={this.getEmojis}>Submit</button>
      </section>
    )
  }

}

export default UploadImage;
