import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


import {connect} from "react-redux";
import {useForm} from "react-hook-form";


const MyPosts = ({isFetching, ...props}) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data,e) => {
        debugger
        props.addPost(data.postMessage)
        e.target.reset();
    }


    let isOwner = (props.authorizedUserId===props.profile.profile?.userId)

    let state = props.profile


    const postDataElements = state.postsData.map((el) => {
        return <Post key={el.id} message={el.text} amountOfLikes={el.likes}/>
    })
    return (

        <>

            {isFetching ? null:
                <>




                    {isOwner &&

                    <div className={s.formWrapper}>

                    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>

                    <textarea  placeholder="What's new???" name="postMessage" ref={register({ required: true, maxLength: 150 })}   />
                    <button type="submit"  > Add post</button>


                    </form>
                        </div>




                    }

                    <div className={s.posts}>
                        {postDataElements}
                    </div>


                </> }
        </>



    )
}


const mapStateToProps = (state)=> ({
     isFetching : state.profile.isFetching,
})

export default  connect(mapStateToProps) (MyPosts);
