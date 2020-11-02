import React from "react";

export const SocialMedia = ({socialMediaTitle, socialMediaLink}) => {
    return (
        <div><b>{socialMediaTitle}:</b>  <a href={ !socialMediaLink.includes("https://")?`https://${socialMediaLink}`: socialMediaLink}> {socialMediaLink}</a> </div>
    )
}