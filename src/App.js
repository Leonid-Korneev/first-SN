import React, {lazy, Suspense} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {HashRouter, Redirect, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Profile from "./components/Profile/Profile";
import {LoginForm} from "./components/Login/Login";
import {connect} from "react-redux";
import {initialization} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import Friends from "./components/Friends/Friends";

const DialogsContainer = lazy(()=>import("./components/Dialogs/DialogsContainer"))


class App extends React.Component {

    componentDidMount() {
        this.props.initialization()

    }


    render() {
        if (!this.props.initialized) {
            return (<Preloader/>)

        } else {
            return (

                <HashRouter >
                    <div className="app">
                        <div className="app-wrapper">
                            <link rel="stylesheet"
                                  href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap"/>
                            <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
                                  rel="stylesheet"/>
                            <HeaderContainer/>
                            <NavBar/>
                            <div className="app-wrapper__content">
                                <Route path="/profile/:userId?" render={() => <Profile/>}/>
                                <Route path="/*" render={() => <Redirect to={"/profile"}  />}/>
                                <Route path="/users" render={() => <UsersContainer/>}/>
                                <Suspense fallback={<Preloader/>}>
                                <Route path="/dialogs/:userId?" render={() => <DialogsContainer/>}/>
                                </Suspense>
                                <Route path="/news" render={() => <News/>}/>
                                <Route path="/settings" render={() => <Settings/>}/>
                                <Route path="/music" render={() => <Music/>}/>
                                <Route path="/login" render={() => <LoginForm/>}/>
                                <Route path="/friends" render={() => <Friends/>}/>
                            </div>
                        </div>


                    </div>
                </HashRouter>

            );
        }

    }

}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
let mapDispatchToProps = {
    initialization
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
