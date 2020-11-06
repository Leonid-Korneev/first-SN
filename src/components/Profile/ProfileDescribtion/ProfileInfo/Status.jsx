import React, {useEffect, useState} from "react";

const  Status = ({updateUserStatus, isOwner, ...props})=> {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(()=>{

        setStatus(status)
    }, [status])
   const disableEditMode = () => {
        debugger
        updateUserStatus(status)
        setEditMode(false)
    }
   const onStatusUpdate = (e) => {
        setStatus(e.currentTarget.value)
    }

    const enableEditMode = () => {

        setEditMode(true)
    }



        return( <>

            {(!editMode) ? <div onDoubleClick={ isOwner && enableEditMode }>{props.status || 'No status yet.'}</div> :
                <input autoFocus={true} onBlur={disableEditMode} onChange={onStatusUpdate} defaultValue={props.status }/>}


        </>)



}

export default Status;

