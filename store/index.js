import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import CategoryReducer from "./reducers/category.reducer";
import BreadsReducer from "./reducers/bread.reducer";
import CartReducer from './reducers/cart.reducer';
import OrderReducer from './reducers/order.reducer';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  breads: BreadsReducer,
  cart: CartReducer,
  orders: OrderReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));