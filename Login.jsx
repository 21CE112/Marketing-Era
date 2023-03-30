import React, { PureComponent } from 'react'
import '../css/login.css';
import { Link } from 'react-router-dom';
const closepopup=()=>{
	// setpop(false);

  }
export default class Login extends PureComponent {
  
	render() {
    return (
      <div>
        
<main className="main">

	<div className="logincontainer" id="text-login">
	
		<section className="wrapper">
			<div className="heading">
				<h1 className="text text-large" id='text-large'>Login</h1>
				{/* <hr style={{color:'#1194A9'}}/> */}
				<Link onclick={closepopup} to="/" id="close">x</Link>

			</div>
			<form name="signin" className="form">
			
				<div className="input-control">
					<label for="email" className="input-label" >Username:</label>
					<input type="email" name="email" id="username" className="input-field" />
					<br/>
				</div>
				<div className="input-control">
				
					<label for="password" className="input-label">Password:</label>
					<input type="password" name="password" id="email" className="input-field" />
					<br/>
				</div>
				
				
				{/* <div>
				{/* <input type="submit" name="submit" className="input-submit" id="text1" value="Login" disabled /> */}
				
				
				
				
			</form>
			<br/>
			<Link to="/verify" className="loginn" id="openbtnn">Login</Link> 
			<div className="input-control-fgpass-a">
				<span>
					{/* <a href="/" className="text text-links" id="for-pass">Forgot Password?</a>
					<Link to="/register" className="text text-links" id="sign-up">Sign up</Link> */}
					<p href="/" className="text text-linkss" id="for-passs">Forgot Password? <Link id="here" to="/register">Sign Up</Link></p>
				</span>
						
				</div>
			
			
			<div className="method">
				
				
				
			</div>
			
		</section>
	</div>
</main>

      </div>
    )
  }
}