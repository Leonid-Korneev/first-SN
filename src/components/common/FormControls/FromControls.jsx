import React from "react";
import s from "./FormControls.module.css"

export const customFormElement = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched

    return (

        <div className={ hasError ? s.error : ""}>


            {React.createElement(props.fieldType, {
                className: props.className,
                placeholder: props.placeholder,
                ...input
            })}

            { hasError && <span>{meta.error}</span>}
        </div>
    )
}