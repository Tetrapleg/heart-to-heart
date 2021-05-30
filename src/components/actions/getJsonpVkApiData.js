import jsonp from 'jsonp';
import { setDataVkApi } from '../../reducers/dataVkApiReduser';

export const getJsonpVkApiData = () => {
  const access_token = 'ca35a219ca35a219ca35a219b5ca424daccca35ca35a219aa922fc6e76f48e1f9e1aa26';
  const owner_id='-124002988';

  return async (dispath) => {
    await jsonp(`https://api.vk.com/method/wall.get?v=5.130&access_token=${access_token}&owner_id=${owner_id}&count=15&offset=0`, null, (error, data) => {
      if (error) {
        dispath(setDataVkApi(error));
      } else {
        dispath(setDataVkApi(data));
      }
    });
  };
};