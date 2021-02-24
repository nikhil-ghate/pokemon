import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './reducers/RootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default Store
