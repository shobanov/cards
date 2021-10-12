import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { authReducer } from './auth-reducer';
import { cardsReducer } from './cards-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  decks: cardsReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(
  applyMiddleware(thunkMiddleware),
));