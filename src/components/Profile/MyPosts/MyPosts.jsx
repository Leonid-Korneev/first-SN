import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, Form} from "react-final-form";
import {customFormElement, } from "../../common/FormControls/FromControls";
import {maxLengthCreator} from "../../../utils/validators/validators";


const MyPosts = (props) => {
    const max100Symbols = maxLengthCreator(100)


    let state = props.profile
    const onSubmit = (formData,form) => {
        props.addPost(formData.newPostText)
        setTimeout(form.restart)


    }


    const postDataElements = state.postsData.map((el) => {
        return <Post message={el.text} amountOfLikes={el.likes}/>
    })
    return (
        <div>
            <div className={s.postsBlock}>


                <Form
                    onSubmit={onSubmit}
                    validate={(values)=> {
                        const errors = {}
                        if (!values.newPostText) {
                            errors.newPostText = 'Required'
                        }


                    return errors}}
                    render={({handleSubmit}) => (
                        <form className={s.form} onSubmit={handleSubmit}>
                            <Field className={s.textarea} name="newPostText" validate={max100Symbols} component={customFormElement}
                                   fieldType="textarea"  type="text"
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
