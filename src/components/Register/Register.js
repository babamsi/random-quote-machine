import React, { useState } from 'react'

function Register (props) {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		email: '',
	// 		password: '',
	// 		name: ''
	// 	}
    // }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const onChangeEmailHandler = (event) => {
		setEmail(event.target.value)
	}
	const onChangePasswordHandler = (event) => {
		setPassword(event.target.value)
	}
	const onChangeNameHandler = (event) => {
		setName(event.target.value)
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
		return (
			<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="text"
				        	 name="Name"  
                             id="Name"
                             value={name} 
				        	 onChange={onChangeNameHandler}/>
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
                            id="email-address"
                            value={email} 
				        	onChange={onChangeEmailHandler}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
                            id="password"
                            value={password} 
				        	onChange={onChangePasswordHandler}/>
				      </div>
				    </fieldset>
				    <div className="">
				      <input 
				      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      	type="submit" 
				      	value="Register" 
				        />
				    </div>
                    <p className="f6 link dim black db pointer" onClick={() => props.history.push('/SignIn')}>Already Have account? SignIn</p>
		 	 		</div>
				</main>
			</article>
		)
}


export default Register