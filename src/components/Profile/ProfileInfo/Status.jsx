import React from "react";



class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    onStatusUpdate = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    enableEditMode = () => {

        this.setState({editMode: true})
    }

    disableEditMode = () => {
        this.props.updateUserStatus(this.state.status)
        this.setState({editMode: false}
        )
    }


    render() {
        console.log("render")
        return <div >

            {(!this.state.editMode) ? <span onDoubleClick={this.enableEditMode}>{this.state.status || 'No status yet.'}</span> :
                <input autoFocus={true} onBlur={this.disableEditMode} onChange={this.onStatusUpdate} defaultValue={this.state.status }/>}


        </div>


    }
}

export default Status;

