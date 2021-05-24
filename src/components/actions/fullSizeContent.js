import axios from 'axios';
import { setFullSizePDF } from '../../reducers/displayingFullSizeContentReduser';

export const getFullSizeContent = (url) => {
  return async (dispatch) => {
    const response = await axios.get("/full_size_content/privacy-policy_fullsize.pdf");
    console.dir(response);
    dispatch(setFullSizePDF(response.data));
  };
};