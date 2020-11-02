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
    },
    authLogIn(formData) {

        return instance.post("/auth/login", {

            email: formData.email ,
            password: formData.password,
            rememberMe : formData.rememberMe

        })
    },

    authLogOut(){
        return instance.delete("/auth/login")
    }

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/${userId}`)
    },


    updateUserStatus(newStatus) {
        return instance.put(`/profile/status/`, {
            status: newStatus
        })
    },


    updateUserPhoto(photos) {
        const formData = new FormData()
        formData.append("image", photos[0])
        return instance.put(`/profile/photo`, formData,{  headers: {
                'Content-Type': 'multipart/form-data'
            }})
    },

    getUserStatus(userId) {

        return instance.get(`/profile/status/${userId}`)
    },
    updateUserInfo(updatedInfo) {
        return instance.put("/profile", updatedInfo)
    }
}