const SET_BOARD_DATA_VK_API = "SET_BOARD_DATA_VK_API";
const SET_FETCHING_BOARD_DATA_VK_API = "SET_FETCHING_BOARD_DATA_VK_API";

const defaultState = {
  boardPostsFiltered: null,
  isFetchingBoardDataVkApi: false,
};



export const dataBoardVkApiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_BOARD_DATA_VK_API:
      return {
        ...state,
        boardPostsFiltered: action.payload,
      };
    case SET_FETCHING_BOARD_DATA_VK_API:
      return {
        ...state,
        isFetchingBoardDataVkApi: action.payload,
      };
    default:
      return state;
  }
};

export const setBoardDataVkApi = (boardDataVkApi) => ({ type:SET_BOARD_DATA_VK_API, payload:boardDataVkApi });
export const setFetchingBoardDataVkApi = (fetchingBoardDataVkApi) => ({ type:SET_FETCHING_BOARD_DATA_VK_API, payload:fetchingBoardDataVkApi });