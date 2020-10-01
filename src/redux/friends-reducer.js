let initialState ={
    friendsItemData: [
        {
            id: 1,
            name: "Andrew",
            avatar: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
        },
        {
            id: 2,
            name: "Leonid",
            avatar: "https://i.pinimg.com/474x/8d/5c/b8/8d5cb8f030f5c4edfc1785d9d09668ed.jpg"
        },
        {
            id: 3,
            name: "Sasha",
            avatar: "https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg"
        },
        {
            id: 4,
            name: "Nastya",
            avatar: "https://i.pinimg.com/originals/fc/2b/17/fc2b1740c218d870aa9ec0be0760d93e.jpg"
        },

    ]
}


const friendsReducer =  (state= initialState , action ) => {
    return state;


}

export default friendsReducer;