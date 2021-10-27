const SET_FULL_SIZE_PDF = "SET_FULL_SIZE_PDF";
const SET_FULL_SIZE_IMG = "SET_FULL_SIZE_IMG";
const SET_FULL_SIZE_VIDEO = "SET_FULL_SIZE_VIDEO";
const SET_URL_FULL_SIZE_VIDEO = "SET_URL_FULL_SIZE_VIDEO";
const SET_FULL_SIZE_PHOTOALBUM = "SET_FULL_SIZE_PHOTOALBUM";

const defaultState = {
  itemsPDF: null,
  itemsImg: null,
  itemsVideo: null,
  urlVideo: null,
  idPhotoAlbum: null,
};

export const displayingFullSizeContentReducer = (state = defaultState, action) => {
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
    case SET_URL_FULL_SIZE_VIDEO:
      return {
        ...state,
        urlVideo: action.payload,
      };
    case SET_FULL_SIZE_PHOTOALBUM:
      return {
        ...state,
        idPhotoAlbum: action.payload,
      };
    default:
      return state;
  }
};

export const setFullSizePDF = (urlPDF) => ({ type:SET_FULL_SIZE_PDF, payload:urlPDF });
export const setFullSizeImg = (urlImg) => ({ type:SET_FULL_SIZE_IMG, payload:urlImg });
export const setFullSizeVideo = (idVideo) => ({ type:SET_FULL_SIZE_VIDEO, payload:idVideo });
export const setUrlFullSizeVideo = (urlVideo) => ({ type:SET_URL_FULL_SIZE_VIDEO, payload:urlVideo });
export const setFullSizePhotoalbum = (idAlbum) => ({ type:SET_FULL_SIZE_PHOTOALBUM, payload:idAlbum });