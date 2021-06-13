import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { displayingFullSizeContentReducer } from './displayingFullSizeContentReducer';
import { dataVkApiReducer } from './dataVkApiReducer';
import { dataBoardVkApiReducer } from './dataBoardVkApiReducer';

const rootReducer = combineReducers({
  fullSizeContent: displayingFullSizeContentReducer,
  dataVkApi: dataVkApiReducer,
  dataBoardVkApi: dataBoardVkApiReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))