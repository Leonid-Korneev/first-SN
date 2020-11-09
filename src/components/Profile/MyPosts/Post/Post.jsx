import React from 'react';
import s from "./Post.module.css";

import img from "./../../../../assets/images/like.png"
import Avatar from "@material-ui/core/Avatar";

import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const Post = (props) => {
    const classes=useStyles()

  return (

    <div className={s.wrapper}>
      <div className={s.item}>
        <Avatar className={classes.large} src={props.avatar} alt={"avatar"}/>


        <p className={s.postText}>{props.message}</p>

      </div>
      <div className={s.like} > <img src={img} alt={"likes-png"} /> {props.amountOfLikes} </div>
    </div>
  )

}
const mapStateToProps = (state)=>({
    avatar: state.profile.profile?.photos.small
})

export default connect(mapStateToProps) (Post);
