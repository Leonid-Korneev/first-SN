import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {
    let newPostText = React.createRef();
    let onAddPost = () => {

        let text = newPostText.current.value;
        props.addPost(text);

        newPostText.current.value = "";
    };



    let onPostChange = () => {

        let text = newPostText.current.value;
        props.updateNewText(text);

    };


    const postDataElements = props.state.postsData.map((el) => {
        return <Post message={el.text} amountOfLikes={el.likes}/>
    })
    return (
        <div>
            <div className={s.postsBlock}>
                <textarea ref={newPostText} onChange={onPostChange} value={props.state.newPostText}/>
                <button onClick={onAddPost} className={s.button}>Add Post</button>
                <div className={s.title}> My posts</div>
            </div>
            <div className={s.posts}>
                {postDataElements}
            </div>
        </div>
    )
}
export default MyPosts;
