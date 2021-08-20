import {ActionsUserReducerTypes, UsersStateType} from "./types"
import { ADD_USERS } from "./vars"


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
    }
    return state
}







export default userReducer
