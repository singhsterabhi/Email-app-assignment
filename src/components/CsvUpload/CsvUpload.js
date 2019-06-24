import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";

const csvUpload = props => {
  const changeHandler = e => {
    const file = e.target.files[0];
    console.log(file);
    props.setFile(file);
    if (file) {
      let data = new FormData();
      data.append("file", file);
      console.log(data);
    }
  };

  return (
    <div>
      <p>Upload a CSV file</p>
      <input name="fileUploader" onChange={changeHandler} type="file" />
      <br />
      <button
        className="waves-effect waves-light btn"
        onClick={() => props.uploadCsv(props.file)}
      >
        UPLOAD
      </button>
    </div>
  );
};

const MapStateToProps = state => {
  return {
    file: state.file
  };
};

const MapDispatchToProps = dispatch => {
  return {
    setFile: file => dispatch(actions.setCsv(file)),
    uploadCsv: file => dispatch(actions.uploadCsv(file))
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(csvUpload);
