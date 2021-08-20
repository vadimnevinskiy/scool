import {combineReducers, createStore} from "redux";
import userReducer from "./user-reducer";
import profileReducer from "./profile-reducer";


const rootReducer = combineReducers({
    userPage: userReducer,
    profilePage: profileReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
let store = createStore(rootReducer)


// @ts-ignore
window._store_ = store
export default store
