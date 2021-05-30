const SET_FULL_SIZE_PDF = "SET_FULL_SIZE_PDF";
const SET_FULL_SIZE_IMG = "SET_FULL_SIZE_IMG";
const SET_FULL_SIZE_VIDEO = "SET_FULL_SIZE_VIDEO";

const defaultState = {
  itemsPDF: null,
  itemsImg: null,
  itemsVideo: null,
};

export const displayingFullSizeContentReduser = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FULL_SIZE_PDF:
      const urlFullSize = action.payload ? 
          `${process.env.PUBLIC_URL}/full_size_content/${action.payload}` : 
          null;
      return {
        ...state,
        itemsPDF: urlFullSize,
      };
    case SET_FULL_SIZE_IMG:
      return {
        ...state,
        itemsImg: action.payload,
      };
    case SET_FULL_SIZE_VIDEO:
      return {
        ...state,
        itemsVideo: action.payload,
      };
    default:
      return state;
  }
};

export const setFullSizePDF = (urlPDF) => ({ type:SET_FULL_SIZE_PDF, payload:urlPDF });
export const setFullSizeImg = (urlImg) => ({ type:SET_FULL_SIZE_IMG, payload:urlImg });
export const setFullSizeVideo = (urlVideo) => ({ type:SET_FULL_SIZE_VIDEO, payload:urlVideo });