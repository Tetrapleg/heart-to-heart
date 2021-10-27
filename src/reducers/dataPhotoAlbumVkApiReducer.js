const SET_PHOTOALBUM_DATA_VK_API = "SET_PHOTOALBUM_DATA_VK_API";
const SET_FETCHING_PHOTOALBUM_DATA_VK_API = "SET_FETCHING_PHOTOALBUM_DATA_VK_API";

const defaultState = {
  photoalbumDataFiltered: null,
  isFetchingPhotoalbumDataVkApi: false,
};



export const dataPhotoAlbumVkApiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PHOTOALBUM_DATA_VK_API:
      return {
        ...state,
        photoalbumDataFiltered: action.payload,
      };
    case SET_FETCHING_PHOTOALBUM_DATA_VK_API:
      return {
        ...state,
        isFetchingPhotoalbumDataVkApi: action.payload,
      };
    default:
      return state;
  }
};

export const setPhotoalbumDataVkApi = (photoalbumDataVkApi) => ({ type:SET_PHOTOALBUM_DATA_VK_API, payload:photoalbumDataVkApi });
export const setFetchingPhotoalbumDataVkApi = (fetchingPhotoalbumDataVkApi) => ({ type:SET_FETCHING_PHOTOALBUM_DATA_VK_API, payload:fetchingPhotoalbumDataVkApi });