import React from 'react';

import Header from "./Header";
import {connect} from "react-redux";
import {authCheck, } from "../../redux/auth-reducer";


class HeaderContainer  extends React.Component {
    componentDidMount() {
        this.props.authCheck()
    }

    render() {

       return (

            <Header {...this.props}/> )
   }
}

const mapStateToProps = (state)=> {

    return ({
        auth : state.auth

    })
}
const mapDispatchToProps = {

    authCheck,
}


export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);