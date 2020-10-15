
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import { withRouter} from "react-router-dom";
import React from "react";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,

    }
}



export default  compose(connect(mapStateToProps), withRouter, withAuthRedirect)(Dialogs)
