import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
class Register extends Component {
	state = {
		email: '',
		name: '',
		password: ''
	}
	 
	sendUser = () => {
		axios.post('http://localhost:3001/users/signup', {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password
		}).then(response => {
				if(response.status === 200) {
					this.props.onAuth(response.data.token)
				}
			})
	}
	render() {
		if(this.props.auth) {
			return <Redirect to="/" />
		}
		return (
			<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
				      <legend className="f1 fw6 ph0 mh0">Register</legend>
							<p color="red" id="pass" style={{display: 'none'}}>The password shorter than 6</p>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="text"
				        	 name="Name"  
                             id="Name"
                             value={this.state.name} 
				        	 onChange={(e) => this.setState({name: e.target.value})}/>
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
                            id="email-address"
                            value={this.state.email} 
				        	onChange={(e) => this.setState({email:e.target.value})}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
                            id="password"
                            value={this.state.password} 
				        	onChange={(e) => this.setState({password: e.target.value})}/>
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      	type="submit" 
								value="Register"
								onClick={this.sendUser}
				        />
				    </div>
                    <p className="f6 link dim black db pointer" onClick={() => this.props.history.push('/SignIn')}>Already Have account? SignIn</p>
		 	 		</div>
				</main>
			</article>
		)
	}
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

const mapStateToProps = state => ({
	auth: state.auth.auth
})
const mapDispatchToProps = dispatch => ({
	onAuth: (auth) => dispatch(actions.storeAuth(auth))
})
export default connect(mapStateToProps, mapDispatchToProps)(Register)