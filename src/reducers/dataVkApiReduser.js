const SET_DATA_VK_API = "SET_DATA_VK_API";

const defaultState = {
  wallPosts: null,
  isFetchingVkApi: false,
};

export const dataVkApiReduser = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DATA_VK_API:
      return {
        ...state,
        wallPosts: action.payload
      };
    default:
      return state;
  }
};

export const setDataVkApi = (dataVkApi) => ({ type:SET_DATA_VK_API, payload:dataVkApi });