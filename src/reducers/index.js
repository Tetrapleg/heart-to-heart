import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { displayingFullSizeContentReducer } from './displayingFullSizeContentReducer';
import { dataVkApiReducer } from './dataVkApiReducer';
import { dataBoardVkApiReducer } from './dataBoardVkApiReducer';
import { dataMarketVkApiReducer } from './dataMarketVkApiReducer';

const rootReducer = combineReducers({
  fullSizeContent: displayingFullSizeContentReducer,
  dataVkApi: dataVkApiReducer,
  dataBoardVkApi: dataBoardVkApiReducer,
  dataMarketVkApi: dataMarketVkApiReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))