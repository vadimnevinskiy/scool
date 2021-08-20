import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "23ab8b18-87cd-45c7-ba46-0b20b5014a46"
    }
})

export const UserAPI = {
    getUsers(count: number  = 10, page: number = 1) {
        return instance.get(`/users?page=${page}&count=${count}`)
            .then(response => {
                return response.data
            })
    }
}

export const ProfileAPI = {
    getProfile(userId: number) {
        return instance.get(`/profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}
