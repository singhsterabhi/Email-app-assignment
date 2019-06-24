import * as actionTypes from "../actions/actionTypes";

const intialState = {
  file: null,
  files: [],
  currFile: null,
  currData: []
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CSV:
      return {
        ...state,
        file: action.file
      };
    case actionTypes.SET_FILES:
      return {
        ...state,
        files: action.files
      };
    case actionTypes.SET_CURR_FILE:
      return {
        ...state,
        currFile: action.file,
        currData: action.data
      };
    default:
      return state;
  }
};

export default reducer;
