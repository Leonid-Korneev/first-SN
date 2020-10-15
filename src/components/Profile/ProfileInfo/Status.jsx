import React from "react";


class Status extends React.Component {
    state = {editMode: false}

    enableEditMode = ()=> {

        this.setState({editMode:true})
    }

    disableEditMode = ()=> {
        this.setState({editMode:false})
    }
    render() {
        return      <div>

            {(!this.state.editMode)? <span onDoubleClick={this.enableEditMode}>{this.props.status}</span> : <input autoFocus={true} onBlur={this.disableEditMode} defaultValue={this.props.status}  />}



                </div>


    }
}
export default Status;

