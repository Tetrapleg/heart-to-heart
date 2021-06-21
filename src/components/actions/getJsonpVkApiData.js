import jsonp from 'jsonp';
import { setPageNum, setPostsCount } from '../../reducers/dataVkApiReducer';
import { setUrlFullSizeVideo } from '../../reducers/displayingFullSizeContentReducer';
import { filteringDataVkApi } from '../functions/filteringDataVkApi';

export const getJsonpVkApiData = ({ method = "wall.get", owner_id = '-124002988', count = 1, offset = 0, ...params }) => {
  const access_token = 'd8546c95a18556ceedc481e4ade6db73a1c0565b408e40bfa8edb9820d15b606320de3dd813735a2815fe';
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
      case "market.get":
        if (jsonpRes.error) {
          console.log(jsonpRes);
          // filteringDataVkApi(jsonpRes, dispatch, method);
        } else {
          console.log(jsonpRes);
          // filteringDataVkApi(jsonpRes, dispatch, method);
        }
        break;
      case "market.search":
        if (jsonpRes.error) {
          // console.log(jsonpRes);
          filteringDataVkApi(jsonpRes, dispatch, method);
        } else {
          // console.log(jsonpRes);
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