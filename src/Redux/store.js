import {applyMiddleware, combineReducers, createStore} from "redux";
import TodosReducer from "./Reducers/TodosReducer";
import thunk from "redux-thunk";
import CommonReducer from "./Reducers/CommonReducer";

const reducers = combineReducers({
    todos: TodosReducer,
    common: CommonReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;