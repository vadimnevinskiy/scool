import {ActionSetUsersType, UserType} from "../types";
import {ADD_TOTAL_COUNT, ADD_USERS, SET_CURRENT_PAGE} from "../vars";

export let setUsers = (users: Array<UserType>): ActionSetUsersType => {
    return {
        type: ADD_USERS,
        users: users
    }
}

export let setTotalCount = (totalCount: number) => {
    return {
        type: ADD_TOTAL_COUNT,
        totalCount
    }
}

export let setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}


