import React, { Component } from 'react'
import axios from 'axios'
class Signing extends Component {
	state = {
		email: '',
		password: ''
	}
	sendUser = () => {
		axios.post('http://localhost:3001/users/login', {
			email: this.state.email,
			password: this.state.password
		}).then(response => {
				// if(response.status === 200) {
				// 	return this.setState({auth: true})
				// }
				console.log(response.data)
			})
	}
	render() {
			return (
				<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
					<main className="pa4 black-80">
						<div className="measure">
							<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
								<legend className="f1 fw6 ph0 mh0">Sign In</legend>
								<div className="mt3">
									<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
									<input
										onChange={(e) => this.setState({email: e.target.value})} 
										className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
										type="email" 
															name="email-address" 
															value={this.state.email} 
										id="email-address" />
								</div>
								<div className="mv3">
									<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
									<input 
										onChange={(e) => this.setState({password: e.target.value})}
										className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
										type="password" 
															name="password" 
															value={this.state.password} 
										id="password" />
								</div>
							</fieldset>
							<div className="">
								<input 
									className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
									type="submit" 
									value="Sign in"
									onClick={this.sendUser} 
									/>
							</div>
							<div className="lh-copy mt3">
								<p className="f6 link dim black db pointer" onClick={() => this.props.history.push('/SignUp')}>Register</p>
							</div>
						</div>
				</main>
				</article>
	
			)
		}
	}
// 	// onSubmitSignin = () => {
// 	// 	fetch('https://serene-ridge-40592.herokuapp.com/signing', {
// 	// 		method: 'post',
// 	// 		headers: {'Content-Type': 'application/json'},
// 	// 		body: JSON.stringify({
// 	// 			email: this.state.emailField,
// 	// 			password: this.state.passwordField 
// 	// 		})
// 	// 	})
// 	// 		.then(response => response.json())
// 	// 		.then(user => {
// 	// 			if (user.id) {
// 	// 				this.props.loadUser(user)
// 	// 				this.props.onRouteChange('home')
// 	// 			}
// 	// 		})
		
// 	// }
// 		return 
// }

export default Signing