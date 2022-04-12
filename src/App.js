import React, { Component } from 'react';
import Quotes from './containers/Quotes'
import Starred from './containers/Starred/Starred'
import { Route, Switch, withRouter} from 'react-router-dom'
import AboutMe from './containers/AboutMe/AboutMe'
import Arabic from './containers/ArabicQuotes/ArabicQuotes'
import Somali from './containers/SomaliQuotes/SomaliQuotes'
import SignIn from './components/SignIn/SignIn'
import * as actions from './store/actions/index'
import {auth} from './firebase.util'
import { connect } from 'react-redux'
import Register from './components/Register/Register'
import Profile from './components/profilePage/profilepage'
import './App.css'

class App extends Component {

    unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.props.onAuth(user)
      console.log(user)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

    render() {
        return(
                <div style={{height: '100%'}}>
                    <Switch>
                        <Route path="/" exact component={Quotes}/>
                        {/* <Route path="/SignIn" component={SignIn}/> */}
                        {/* <Route path="/authenticate" component={Register}/> */}
                        <Route path="/starred" component={Starred} />
                        <Route path="/About" component={AboutMe} />
                        <Route path="/Arabic" component={Arabic} />
                        <Route path="/Somali" component={Somali} />
                        <Route path="/profile" component={Register} />
                    </Switch>
                </div>
            
        )
    }
}

const mapStateToProps = state => ({
	auth: state.auth.auth
})
const mapDispatchToProps = dispatch => ({
	onAuth: (auth) => dispatch(actions.storeAuth(auth))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));