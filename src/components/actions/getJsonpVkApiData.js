import jsonp from 'jsonp';
import { setPageNum, setPostsCount } from '../../reducers/dataVkApiReducer';
import { setUrlFullSizeVideo } from '../../reducers/displayingFullSizeContentReducer';
import { filteringDataVkApi } from '../functions/filteringDataVkApi';

export const getJsonpVkApiData = ({ method = "wall.get", owner_id = '-124002988', count = 1, offset = 0, ...params }) => {
  const access_token = 'b94dbda52d9f300bca5a02b7b2f883898c8d14b9f0a69cb186caeabf76b1c20961358ed6948cdb6e79078';
  const requestParams = params.requestParams ? `&${params.requestParams.join('&')}` : '';

  const jsonpThen = (jsonpRes, dispatch) => {
    switch(method) {
      case "video.get":
        if (jsonpRes.error) {
          dispatch(setUrlFullSizeVideo(jsonpRes));
        } else {
          dispatch(setUrlFullSizeVideo(jsonpRes));
        }
        break;
      case "board.getComments":
        if (jsonpRes.error) {
          filteringDataVkApi(jsonpRes, dispatch, method);
        } else {
          filteringDataVkApi(jsonpRes, dispatch, method);
        }
        break;
      default:    
        if (jsonpRes.error) {
          filteringDataVkApi(jsonpRes, dispatch, method);
          break;
        } else {
          dispatch(setPostsCount(jsonpRes.response.count - (offset + count)));
          dispatch(setPageNum(count));
          filteringDataVkApi(jsonpRes, dispatch, method);
        }
    }
  };

  return async (dispatch) => {
    await jsonp(`https://api.vk.com/method/${method}?v=5.131&access_token=${access_token}&owner_id=${owner_id}&count=${count}&offset=${offset}${requestParams}`, null, (error, data) => {
      if(error) {
        jsonpThen(error, dispatch);
      } else {
        jsonpThen(data, dispatch);
      }
    });
  };
};