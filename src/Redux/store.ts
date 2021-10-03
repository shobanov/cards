import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { authReducer } from './auth-reducer'

// creating the structure of the state object
const rootReducer = combineReducers({
  auth: authReducer
})

// defined the type of the entire state object
export type AppRootStateType = ReturnType<typeof rootReducer>

// create store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// to access the state through the browser console
// @ts-ignore
window.store = store