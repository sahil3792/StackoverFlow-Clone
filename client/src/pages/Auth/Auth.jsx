import React, { useState } from 'react'

import './Auth.css'
import icon from '../../assets/images.png'
const Auth = () => {

  const [isSignup, setIsSignup] = useState(false)

  const handleSwitch = () =>{
    setIsSignup(!isSignup)
  }

  return (
    <section class='auth-section'>
      <div class='auth-container'>
        { !isSignup && <img src={icon} alt='stack overflow' className='login-logo'/>}
        <form>

          {
            isSignup && (
              <label htmlFor='none'>
                  <h4>Display Name</h4>
                  <input type='text' id='name' name='name'/>
              </label>
            )
            
          }
          <label htmlFor='email'>
            <h4>Email</h4>
            <input type="email" name='email' id='email'/>
          </label>
          <label htmlFor='password'>
            <div>
              <h4>Password</h4>
              { !isSignup && <h4>Forgot password</h4>}
            </div>
            <input type="password" name='password' id='password'/>
            { isSignup && <p>Passwords must contain at least eight<br/> characters, including at least 1 letter and 1 <br/> number.</p>}
          </label>
          {
            isSignup && (
              <label htmlFor='check'>
                <input type="checkbox" id='check' />
                <p>Opt-in to receive occasional <br/>product updates, user research invitations,<br/> company announcements, and digests.</p>
              </label>
            )
          }
          <button type='submit' className='auth-btn'>{isSignup ? 'Sign up' : 'Log in'}</button>
          { isSignup && (
            <p style={{ color: "#666767", fontSize:"13px"}}>
              By clicking “Sign up”, you agree to our 
              <span style={{ color: "#007ac6"}}> terms of<br/> service</span> and acknowledge that you have read and<br/> understand our 
              <span style={{ color: "#007ac6"}}> privacy policy</span> and 
              <span style={{ color: "#007ac6"}}> code of<br/> conduct.</span>
            </p>
          )}
        </form>
        <p>
          {isSignup ? 'Already have an account?' : "Don't have an account"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? "Log in" : 'Sign up'}</button>
        </p>
      </div>

    </section>
  )
}

export default Auth