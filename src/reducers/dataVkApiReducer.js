const SET_FILTERED_DATA_VK_API = "SET_FILTERED_DATA_VK_API";
const SET_POSTS_COUNT = "SET_POSTS_COUNT";
const SET_PAGE_NUM = "SET_PAGE_NUM";
const SET_SCROLL_TOP = "SET_SCROLL_TOP";

const defaultState = {
  wallPostsFiltered: {response: 1, messages: []},
  postsCount: 1,
  pageNumber: 0,
  scrollTop: 0,
};



export const dataVkApiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILTERED_DATA_VK_API:
      return {
        ...state,
        wallPostsFiltered:  state.wallPostsFiltered.response ?
                            {
                            ...state.wallPostsFiltered,
                            response: action.payload.response,
                            messages: action.payload.response ? 
                                      [...state.wallPostsFiltered.messages, ...action.payload.messages] :
                                      action.payload.messages,
                            } :
                            action.payload,
      };
    case SET_POSTS_COUNT:
      return {
        ...state,
        postsCount: action.payload,
      };
    case SET_PAGE_NUM:
      return {
        ...state,
        pageNumber: state.pageNumber + action.payload,
      };
    case SET_SCROLL_TOP:
      return {
        ...state,
        scrollTop: action.payload,
      };
    default:
      return state;
  }
};

export const setFilteredDataVkApi = (filteredDataVkApi) => ({ type:SET_FILTERED_DATA_VK_API, payload:filteredDataVkApi });
export const setPostsCount = (count) => ({ type:SET_POSTS_COUNT, payload:count });
export const setPageNum = (value) => ({ type:SET_PAGE_NUM, payload:value });
export const setScrollTop = (height) => ({ type:SET_SCROLL_TOP, payload:height });