import React, { Component } from 'react';
import Quotes from './containers/Quotes'
import Starred from './containers/Starred/Starred'
import { Route, Switch, withRouter} from 'react-router-dom'
import AboutMe from './containers/AboutMe/AboutMe'
import Arabic from './containers/ArabicQuotes/ArabicQuotes'
import Somali from './containers/SomaliQuotes/SomaliQuotes'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import Profile from './components/profilePage/profilepage'
import './App.css'

class App extends Component {
    render() {
        return(
                <div style={{height: '100%'}}>
                    <Switch>
                        <Route path="/" exact component={Quotes}/>
                        <Route path="/SignIn" component={SignIn}/>
                        <Route path="/SignUp" component={Register}/>
                        <Route path="/starred" component={Starred} />
                        <Route path="/About" component={AboutMe} />
                        <Route path="/Arabic" component={Arabic} />
                        <Route path="/Somali" component={Somali} />
                        <Route path="/profile" component={Profile} />
                    </Switch>
                </div>
            
        )
    }
}

export default withRouter(App);