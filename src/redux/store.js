import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'

import appReducer from './app-reducer'

const reducers = combineReducers({
  app: appReducer,
})

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)))

window.store = store
export default store
