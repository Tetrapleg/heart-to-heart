import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { displayingFullSizeContentReduser } from './displayingFullSizeContentReduser';
import { dataVkApiReduser } from './dataVkApiReduser';

const rootReducer = combineReducers({
  fullSizeContent: displayingFullSizeContentReduser,
  dataVkApi: dataVkApiReduser,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))