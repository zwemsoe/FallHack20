import React from "react";
import axios from "axios";
import Modal from "react-awesome-modal";

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      mode: null,
      visible: false,
      fileType: "",
    };
  }

  handleChange = (e) => {
    if (e.target.files[0] == null) {
      return;
    }
    const fileParts = e.target.files[0].name.split(".");
    const fileType = fileParts[fileParts.length - 1];
    this.setState({
      image: e.target.files[0],
      fileType: fileType,
    });
  };

  handleUpload = async () => {
    const { image, mode, fileType } = this.state;
    if(image == null){
      return;
    }
    this.closeModal();
    let data = new FormData();
    data.append('file', image);
    data.append('fileType', fileType );
    data.append('mode', mode);
    this.props.setLoading();
    try{
    const upload_res = await axios
      .post(`https://emojimypic-server.herokuapp.com/api/imageUpload`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': 'https://emojimypic-server.herokuapp.com/api/imageUpload',
        },
    })
     if(upload_res.status === 200 ){
        this.props.parentCallback(upload_res.data);
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
                accept= ".jpg,.jpeg,.png"
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
