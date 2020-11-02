import React from "react";
import style from "./Preloader.module.css"
import "./Preloader.css"

const  Preloader = () => {
    return <div  className={style.content}>  <div className="preloader-container"><div className="lds-dual-ring"/></div> </div>
}

export default Preloader


