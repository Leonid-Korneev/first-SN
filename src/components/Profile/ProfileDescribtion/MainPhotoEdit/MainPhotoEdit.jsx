import React, {useState} from "react";
import s from "./MainPhotoEdit.module.css"
import {useForm} from "react-hook-form";
import {Modal} from "@material-ui/core";


export const MainPhotoEdit = ({profileEditingPhoto,savePhoto, setProfileEditingPhoto}) => {


    const [photoUrl, setPhotoUrl] = useState("")
    const {register, handleSubmit} = useForm();


    const handleClose = () => {
        setProfileEditingPhoto(false)
    }

    const onSubmit = (data) => {
        savePhoto(data.photo)
        handleClose()
    }



    function onChange(event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function (event) {
            setPhotoUrl(event.target.result)
        };
        reader.readAsDataURL(file)
    }

    return (

        <Modal
            open={profileEditingPhoto}
            onClose={handleClose}>


            <div className={s.container}>


                {photoUrl ? <div> <img className={s.photo__example} src={photoUrl} alt=""/></div> : null}

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>

                        <input name="photo" onChange={onChange} ref={register} type="file"/>
                        <button type="submit"> Upload new avatar</button>
                    </div>
                </form>
            </div>




        </Modal>


     )

}