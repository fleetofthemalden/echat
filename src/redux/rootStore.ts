import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

import { messagesReducer } from './reducers';
import { MessagesState } from './interfaces';

// Create an interface for the application state
export interface AppState {
  messagesState: MessagesState;
}

// Create the root reducer
const rootReducer = combineReducers<AppState>({
  messagesState: messagesReducer
});

// Create a configure store function of type `AppState`
export default function configureStore(): Store<AppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}