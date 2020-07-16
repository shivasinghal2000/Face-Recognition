import React from 'react'
import './Signup.css'
const Signup = ({ onRouteChange }) => {
  return (
    <div className='pt6 '>
      <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw7 shadow-5 center '>
        <main className='pa4 black-80'>
          <form action='sign-up_submit' method='get' accept-charset='utf-8'>
            <legend className='f2 fw6 ph0 mh0 ba b--transparent ph0 mh0 center hover_'>
              SIGN UP
            </legend>
            <fieldset id='sign_up_submit' className='ba b--transparent ph0 mh0'>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' for='email-address'>
                  Email address
                </label>
                <input
                  className='pa2 input-reset ba bg-transparent w-100 measure'
                  type='email'
                  name='email-address'
                  id='email-address'
                />
              </div>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' for='password'>
                  Password
                </label>
                <input
                  className='b pa2 input-reset ba bg-transparent'
                  type='password'
                  name='password'
                  id='password'
                />
              </div>
            </fieldset>
            <div className='mt3'>
              <input
                onClick={() => onRouteChange('signin')}
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6'
                type='submit'
                value='Sign Up'
              />
            </div>
          </form>
        </main>
      </article>
    </div>
  )
}

export default Signup
