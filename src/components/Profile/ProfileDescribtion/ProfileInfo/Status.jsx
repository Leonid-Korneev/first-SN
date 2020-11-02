import React, {useEffect, useState} from "react";

const  Status = ({updateUserStatus, isOwner, ...props})=> {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(()=>{

        setStatus(status)
    }, [status])
   const disableEditMode = () => {
        updateUserStatus(props.status)
        setEditMode(false)
    }
   const onStatusUpdate = (e) => {
        setStatus(e.currentTarget.value)
    }

    const enableEditMode = () => {

        setEditMode(true)
    }



        return( <>

            {(!editMode) ? <span onDoubleClick={ isOwner && enableEditMode }>{props.status || 'No status yet.'}</span> :
                <input autoFocus={true} onBlur={disableEditMode} onChange={onStatusUpdate} defaultValue={props.status }/>}


        </>)



}

export default Status;

