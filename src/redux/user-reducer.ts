import {ActionsUserReducerTypes, UsersStateType} from "./types"
import {ADD_TOTAL_COUNT, ADD_USERS, SET_CURRENT_PAGE} from "./vars"


const initialState: UsersStateType = {
    users: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1
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
    }
    return state
}







export default userReducer
