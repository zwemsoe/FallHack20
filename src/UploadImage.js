import React from "react";
import axios from "axios";
import Modal from "react-awesome-modal";

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      image: null,
      mode: null,
      visible: false,
      imageUrl: "",
    };
  }

  handleChange = (e) => {
    if (e.target.files[0] == null) {
      return;
    }
    console.log(e.target.files[0]);
    this.setState({
      image: e.target.files[0],
    });
  };

  handleUpload = async () => {
    const { image, mode } = this.state;
    let data = new FormData();
    data.append('file', image);
    console.log("mode: ", mode)
    try{
    const upload_res = await axios
      .post(`/api/imageUpload/${mode}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
    })
     if(upload_res.status === 200 ){
      this.props.parentCallback(upload_res.data);
      this.closeModal();
    } 

    } catch (err) {
      console.log(err);
    }
  };

  startModal = (type) => {
    this.setState({
      mode: type,
      visible: true,
    });
  };

  closeModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Modal
          visible={this.state.visible}
          width='350'
          height='100'
          effect='fadeInUp'
          onClickAway={() => this.closeModal()}
        >
          <div className='container' style={{ paddingTop: "1rem" }}>
            <div className='display-grid-center'>
                <input
                onChange={this.handleChange}
                ref={(ref) => {
                  this.uploadInput = ref;
                }}
                type='file'
                name= {mode}
              />
              <button className='btn btn-dark' onClick={this.handleUpload}>
                Upload
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default UploadImage;
