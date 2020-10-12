import React from 'react';
import s from "./Post.module.css";

import img from "./../../../../assets/images/like.png"

const Post = (props) => {

  return (

    <div className={s.wrapper}>
      <div className={s.item}>
        <img src="https://svirtus.cdnvideo.ru/RXYqectI4SSltlLXVwigGWuNH3I=/0x0:770x330/1200x1200/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/95/950154e588a56a266eb1566d4d86f78a.jpg?m=563e4830a89f6ebc00077efd8b08f382" alt={"avatar"}/>


        <p>{props.message}</p>

      </div>
      <div className={s.like} > <img src={img} alt={"likes-png"} /> {props.amountOfLikes} </div>
    </div>
  )

}

export default Post;
