
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import { withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,

    }
}

const DialogsContainer =   compose(connect(mapStateToProps), withRouter, withAuthRedirect)(Dialogs)

export default  DialogsContainer
