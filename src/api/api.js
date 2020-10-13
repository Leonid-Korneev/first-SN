import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials:true,
    headers: {"api-key": "b5f687c3-02cf-4669-a5d3-f37c6f32f810"}
})



export const  users = {
    getUsers(page)  {   if(!arguments.length){return instance.get(`/users?count=${this.props.pageSize}`).then ((response)=>response.data)}
    else {return instance.get(`/users?page=${page}&count=${this.props.pageSize}`)}},


}

export const followUser = {
    follow (userId) {
        return instance.post(`/follow/${userId}`)
    },

    unfollow(userId){
       return  instance.delete(`/follow/${userId}`)
    }



}