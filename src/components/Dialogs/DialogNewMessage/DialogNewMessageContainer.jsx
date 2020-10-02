import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import DialogNewMessage from "./DialogNewMessage";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => dispatch(addMessageActionCreator()),

        updateMEssage: (text) => dispatch(updateNewMessageTextActionCreator(text))
    }
}
let DialogNewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogNewMessage)
export default DialogNewMessageContainer;