import React, {useEffect, useState} from "react";

const  Status = (props)=> {
    debugger
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(()=>{

        setStatus(props.status)
    }, [props.status])
   const disableEditMode = () => {
        props.updateUserStatus(status)
        setEditMode(false)
    }
   const onStatusUpdate = (e) => {
        setStatus(e.currentTarget.value)
    }

    const enableEditMode = () => {

        setEditMode(true)
    }



        return( <>

            {(!editMode) ? <span onDoubleClick={enableEditMode}>{props.status || 'No status yet.'}</span> :
                <input autoFocus={true} onBlur={disableEditMode} onChange={onStatusUpdate} defaultValue={status }/>}


        </>)



}

export default Status;

