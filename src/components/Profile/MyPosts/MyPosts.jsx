import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, Form} from "react-final-form";


const MyPosts = (props) => {


    let state = props.profile
    const onSubmit = (formData) => {
        props.addPost(formData.newPostText)


    }


    const postDataElements = state.postsData.map((el) => {
        return <Post message={el.text} amountOfLikes={el.likes}/>
    })
    return (
        <div>
            <div className={s.postsBlock}>


                <Form
                    onSubmit={onSubmit}

                    render={({handleSubmit, form}) => (
                        <form className={s.form} onSubmit={(event) => {
                            let p = new Promise((resolve) => {
                                handleSubmit(event)
                                resolve()
                            })
                            p.then(() => {
                                form.reset()
                            })
                        }}>
                            <Field className={s.textarea} name="newPostText" component="textarea" type="text"
                                   placeholder="Enter new post..."/>

                                <button className={s.submit_button} type="submit">Add Post</button>

                        </form>
                    )}
                />


                <div className={s.title}> My posts</div>
            </div>
            <div className={s.posts}>
                {postDataElements}
            </div>
        </div>
    )
}
export default MyPosts;
