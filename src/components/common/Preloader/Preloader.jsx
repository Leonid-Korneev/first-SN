import React from "react";
import preload from "../../../assets/images/preloader.svg";
import style from "./Preloader.module.css"

const  Preloader = () => {
    return (<div  className={style.content}> <img className={style.preloader} src={preload} alt={"Preloader"} />  </div>)
}

export default Preloader