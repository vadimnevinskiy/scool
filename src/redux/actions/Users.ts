import {ActionSetUsersType, UserType} from "../types";
import {ADD_TOTAL_COUNT, ADD_USERS, FETCHING_TOGGLE, SET_CURRENT_PAGE, SET_CURRENT_PORTION} from "../vars";

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

export let setFetching = (isFetching: boolean) => {
    return {
        type: FETCHING_TOGGLE,
        isFetching
    }
}

export let setCurrentPortion = (currentPortion: number) => {
    return {
        type: SET_CURRENT_PORTION,
        currentPortion
    }
}
