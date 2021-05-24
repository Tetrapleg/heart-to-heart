const SET_FULL_SIZE_PDF = "SET_FULL_SIZE_PDF";

const defaultState = {
  itemsPDF: null,
};

export const displayingFullSizeContentReduser = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FULL_SIZE_PDF:
      const urlFullSize = action.payload 
            ? 
          `${process.env.PUBLIC_URL}/full_size_content/${action.payload}` 
            : 
          null;
      return {
        ...state,
        itemsPDF: urlFullSize,
      };
    default:
      return state;
  }
};

export const setFullSizePDF = (urlPDF) => ({ type:SET_FULL_SIZE_PDF, payload:urlPDF });