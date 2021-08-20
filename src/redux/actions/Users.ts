import {ActionSetUsersType, UserType} from "../types";
import {ADD_USERS} from "../vars";

export let setUsers = (users: Array<UserType>): ActionSetUsersType => {
    return {
        type: ADD_USERS,
        users: users
    }
}
