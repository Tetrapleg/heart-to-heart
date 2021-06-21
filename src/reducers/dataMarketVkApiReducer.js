const SET_MARKET_DATA_VK_API = "SET_MARKET_DATA_VK_API";
const SET_FETCHING_MARKET_DATA_VK_API = "SET_FETCHING_MARKET_DATA_VK_API";

const defaultState = {
  marketPostsFiltered: null,
  isFetchingMarketDataVkApi: false,
};



export const dataMarketVkApiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_MARKET_DATA_VK_API:
      return {
        ...state,
        marketPostsFiltered: action.payload,
      };
    case SET_FETCHING_MARKET_DATA_VK_API:
      return {
        ...state,
        isFetchingMarketDataVkApi: action.payload,
      };
    default:
      return state;
  }
};

export const setMarketDataVkApi = (marketDataVkApi) => ({ type:SET_MARKET_DATA_VK_API, payload:marketDataVkApi });
export const setFetchingMarketDataVkApi = (fetchingMarketDataVkApi) => ({ type:SET_FETCHING_MARKET_DATA_VK_API, payload:fetchingMarketDataVkApi });