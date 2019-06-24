import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";

const listFiles = props => {
  return (
    <div>
      <button onClick={props.getFiles} className="waves-effect waves-light btn">
        Click to List all files
      </button>
      {props.files.length > 0 ? (
        <div>
          <h5>List of files:</h5>
          {props.files.map(file => {
            return (
              <p key={file} onClick={() => props.currFile(file)}>
                {file}
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

const MapStateToProps = state => {
  return {
    files: state.files
  };
};

const MapDispatchToProps = dispatch => {
  return {
    getFiles: () => dispatch(actions.getFiles()),
    currFile: file => dispatch(actions.getCurrFile(file))
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(listFiles);
