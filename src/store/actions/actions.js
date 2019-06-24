import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setCsv = file => {
  return {
    type: actionTypes.SET_CSV,
    file
  };
};

export const uploadCsv = file => {
  return dispatch => {
    axios
      .post("http://13.233.238.238:5000/api/csv/", file, {
        headers: { "Content-Type": "application/javascript" }
      })
      .then(res => console.log(res.data))
      .catch(e => console.log(e));
  };
};

export const setFiles = files => {
  return {
    type: actionTypes.SET_FILES,
    files
  };
};

export const getFiles = () => {
  return dispatch => {
    console.log("getFiles");
    axios
      .get("http://13.233.238.238:5000/api/csv/", {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(res => {
        console.log(res.data.data.files);
        dispatch(setFiles(res.data.data.files));
      })
      .catch(e => console.log(e));
  };
};

export const setCurrFile = (file, data) => {
  return {
    type: actionTypes.SET_CURR_FILE,
    file,
    data
  };
};

export const getCurrFile = file => {
  return dispatch => {
    axios
      .get(`http://13.233.238.238:5000/api/csv/getHeader/${file}`, {
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
        console.log(res.data.data.split(","));
        dispatch(setCurrFile(file, res.data.data.split(",")));
      })
      .catch(e => console.log(e));
  };
};
