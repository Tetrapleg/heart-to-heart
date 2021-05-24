import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { reposReducer } from './reposReduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { displayingFullSizeContentReduser } from './displayingFullSizeContentReduser';

const rootReducer = combineReducers({
  fullSizeContent: displayingFullSizeContentReduser,
  repos: reposReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))