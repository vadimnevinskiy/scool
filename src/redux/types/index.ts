import {ADD_PROFILE, ADD_TOTAL_COUNT, ADD_USERS, FETCHING_TOGGLE, SET_CURRENT_PAGE, SET_CURRENT_PORTION} from "../vars";
export type ActionsUserReducerTypes = ActionSetUsersType | ActionSetTotalCountType | ActionSetCurrentPageType | ActionSetFetchingType | ActionSetCurrentPortionType
export type ActionsProfileReducerTypes = ActionSetProfileType


//Action Types
export type ActionSetUsersType = {
    type: typeof ADD_USERS,
    users: UserType[]
}
export type ActionSetTotalCountType = {
    type: typeof ADD_TOTAL_COUNT,
    totalCount: number
}
export type ActionSetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
export type ActionSetProfileType = {
    type: typeof ADD_PROFILE,
    profile: ProfileType
}
export type ActionSetFetchingType = {
    type: typeof FETCHING_TOGGLE
    isFetching: boolean
}
export type ActionSetCurrentPortionType = {
    type: typeof SET_CURRENT_PORTION
    currentPortion: number
}



//State Types
export type UsersStateType = {
    users: UserType[],
    totalCount: number,
    pageSize: number,
    currentPage: number,
    currentPortion: number,
    isFetching: boolean
}
export type ProfileStateType = {
    profile: ProfileType | null
}



type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}


//Profile
export type ContactsType = {
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
}
export type ProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

