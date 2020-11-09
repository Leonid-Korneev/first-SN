import React from "react";
import s from "../ProfileDescribtion.module.css"
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import Icon48LogoVk from "@vkontakte/icons/dist/48/logo_vk";


export const SocialMedia = ({socialMediaTitle, socialMediaLink}) => {
    let component


    switch (socialMediaTitle) {
        case "Twitter": {
            component = TwitterIcon
            break

        }
        case "Facebook": {
            component = FacebookIcon
            break

        }
        case "Instagram": {
            component = InstagramIcon
            break

        }
        case "Youtube": {
            component = YouTubeIcon
            break
        }
        case "Github": {
            component = GitHubIcon
            break
        }
        case "Vk": {
            component= Icon48LogoVk
            break
        }
        default : {
            break
        }

    }



    return (

        <div className={component ? s.socialIcon : s.socialString}>


            <b>{component ? null : socialMediaTitle}</b> <a className={s.socialLink}
            href={!socialMediaLink.includes("https://") ? `https://${socialMediaLink}` : socialMediaLink}>
            {component ? <div>{ React.createElement(component, {width:24}, )}</div>  : socialMediaLink  }  </a>
        </div>
    )
}