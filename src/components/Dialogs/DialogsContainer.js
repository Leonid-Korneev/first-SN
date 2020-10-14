
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
}

let DialogsContainer = connect(mapStateToProps)(withRouter (Dialogs))
export default DialogsContainer