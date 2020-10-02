
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
}

let DialogsContainer = connect(mapStateToProps)(Dialogs)
export default DialogsContainer