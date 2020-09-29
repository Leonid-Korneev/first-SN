let store = {

    appState: {
        friends: {
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
        },
        profile: {
            postsData: [
                {id: 1, text: "hi, how are you?", likes: 30},
                {id: 2, text: "This is my first post", likes: 43}
            ],
            newPostText: "",
            profileInfo: {
                avatar: "",
                name: "Vitaly",
                birthDate: "26.03.1998",
                city: "Vinnica",
                education: "8 grade",
                website: "youtube.com/arthas"
            }
        },
        dialogs: {
            dialogsData: [
                {
                    id: 1,
                    name: "Leonid",
                    avatar: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
                    messageData: [
                        {author: "author:  ", text: "Hello, how are?"},

                    ]


                },
                {
                    id: 2,
                    name: "Dima",
                    text: "Hi",
                    messageData: [
                        {author: "author:  ", text: "Hey!"},

                    ],
                    avatar: "data:image/jpeg;base64,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"
                },
                {
                    id: 3,
                    name: "Nastya",
                    messageData: [
                        {author: "author:  ", text: "Good morning!"},

                    ],
                    text: "Hi",
                    avatar: "https://i.pinimg.com/originals/fc/2b/17/fc2b1740c218d870aa9ec0be0760d93e.jpg"
                },
                {
                    id: 4,
                    name: "Sasha",
                    messageData: [
                        {author: "author:  ", text: "Privet!"}, {author: "author:", text: "Kak dela?"}

                    ],
                    text: "Hi",
                    avatar: "https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg"
                },
                {
                    id: 5,
                    name: "Papich",
                    messageData: [
                        {author: "author:  ", text: "Zdarova"},

                    ],
                    text: "Hi",
                    avatar: "data:image/jpeg;base64,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"
                }],
            newMessageText: "",

        }
    },
    addPost() {
        let newPost = {
            id: store.appState.profile.postsData.length + 1,
            text: store.appState.profile.newPostText,
            likes: 0
        };
        store.appState.profile.postsData.push(newPost);
        store.appState.profile.newPostText = "";

        store.rerenderEntireTree(store.appState);
    },
    updateNewText(newText) {
        store.appState.profile.newPostText = newText;
        store.rerenderEntireTree(store.appState);


    },
    updateNewMessage(text) {
        store.appState.dialogs.newMessageText = text;
        store.rerenderEntireTree(store.appState);


    },
    addMessage() {
        debugger;
        let newMessage = {author: "me", text: store.appState.dialogs.newMessageText};
        store.appState.dialogs.dialogsData[0].messageData.push(newMessage);
        store.rerenderEntireTree(store.appState);
        store.appState.dialogs.newMessageText = ""

    },
    subcribe(observer) {
        store.rerenderEntireTree = observer;
    },
    rerenderEntireTree() {
        console.log("state was changed");
    }

}

export default store;