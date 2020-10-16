import * as axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {"api-key": "b5f687c3-02cf-4669-a5d3-f37c6f32f810"}
})


export const usersApiRequster = {
    getUsers(page) {
        if (!arguments.length) {
            return instance.get(`/users?count=${this.props.pageSize}`).then((response) => response.data)
        } else {
            return instance.get(`/users?page=${page}&count=${this.props.pageSize}`)
        }
    },


}



export const followUser = {
    follow(userId) {
        return instance.post(`/follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`/follow/${userId}`)
    }


}

export const authRequest = {
    authCheck() {
        return instance.get("/auth/me").then((response) => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/${userId ?? 11987}`)
    },


    updateUserStatus(newStatus) {
        return instance.put(`/profile/status/`, {
            status: newStatus
        })
    },

    getUserStatus(userId) {

        return instance.get(`/profile/status/${userId ?? 11987}`)
    }
}