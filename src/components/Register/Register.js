import React, { useState } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import * as actions from '../../store/actions/index'
import {SignInWithGoogle} from '../../firebase.util'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../../firebase.util'

const sendUser = () => {
	// console.log(useAuthState(auth))
}

const Register = () => {
	const [user, loading] = useAuthState(auth);
	const [users, setusers] = useState(user);
	if(!loading && user) return (
			<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
					<main className="pa4 black-80">
						<div className="measure">
							<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
								<legend className="f1 fw6 ph0 mh0">CREATE YOUR OWN QUOTE</legend>
								<p className="f6 link dim black db pointer">USER: {user.displayName}</p>
								<div className="mt3">
									<label className="db fw6 lh-copy f6" htmlFor="email-address">QUOTE:</label>
									<input
										// onChange={(e) => this.setState({email: e.target.value})} 
										className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
										type="text" 
															name="email-address" 
															// value={this.state.email} 
										id="email-address"
										placeholder='PUT THE QUOTE WORDS!' />
								</div>
								<div className="mv3">
									<label className="db fw6 lh-copy f6" htmlFor="password">BACKGROUND COLOR</label>
									<input 
										// onChange={(e) => this.setState({password: e.target.value})}
										className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
										type="text" 
															name="password" 
															// value={this.state.password} 
										id="password"
										placeholder='PUT YOUR QUOTE BG COLOR EX:#XXXXX' />
								</div>
							</fieldset>
							<div className="">
								<input 
									className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
									type="submit" 
									value="Sign in"
									onClick={sendUser} 
									/>
							</div>
							<div className="lh-copy mt3">
								<p className="f6 link dim black db pointer">Register</p>
							</div>
						</div>
				</main>
				</article>
		)
	
	}

	// onRegister = () => {
	// 	fetch('https://serene-ridge-40592.herokuapp.com/register', {
	// 		method: 'post',
	// 		headers: {'Content-Type': 'application/json'},
	// 		body: JSON.stringify({
	// 			email: this.state.email,
	// 			password: this.state.password,
	// 			name: this.state.name
	// 		})
	// 	})
	// 		.then(response => response.json())
	// 		.then(user => {
	// 			if (user.id) {
	// 				this.props.loadUser(user)
	// 				this.props.onRouteChange('home')
	// 			}
	// 		})
		
	// }


export default Register