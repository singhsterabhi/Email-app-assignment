import React from "react";
import { connect } from "react-redux";

const currFileData = props => {
  return (
    <div>
      {props.currData.length > 0 ? (
        <>
          <h5>Current File Data</h5>
          <p>File: {props.currFile}</p>
          <div>
            {props.currData.map(data => {
              return (
                <label key={data}>
                  <input type="checkbox" value="checked" /> {data}
                </label>
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
};

const MapStateToProps = state => {
  return {
    currFile: state.currFile,
    currData: state.currData
  };
};

const MapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  MapStateToProps,
  null
)(currFileData);
