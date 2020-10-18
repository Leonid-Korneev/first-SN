import {addMessage, } from "../../../redux/dialogs-reducer";
import DialogNewMessage from "./DialogNewMessage";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
}

let mapDispatchToProps =  {
    addMessage
}
let DialogNewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogNewMessage)
export default DialogNewMessageContainer;