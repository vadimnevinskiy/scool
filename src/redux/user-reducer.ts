import {ActionsUserReducerTypes, UsersStateType} from "./types"
import {ADD_TOTAL_COUNT, ADD_USERS, FETCHING_TOGGLE, SET_CURRENT_PAGE, SET_CURRENT_PORTION} from "./vars"


const initialState: UsersStateType = {
    users: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    currentPortion: 0,
    isFetching: false
}



const userReducer = (state: UsersStateType = initialState, action: ActionsUserReducerTypes): UsersStateType => {
    switch (action.type) {
        case ADD_USERS:
            return {
                ...state,
                users: action.users
            }
        case ADD_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case FETCHING_TOGGLE:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_CURRENT_PORTION:
            return {
                ...state,
                currentPortion: action.currentPortion
            }
    }
    return state
}







export default userReducer
