import './SignInForm.css'

import { } from 'react'

export const SignInForm = () => {

  return (
    <section className="sign-in-form">
      <form>
        <input 
          type="text" 
          placeholder="Username"
        />
        <input 
          type="password" 
          placeholder="Password"
        />
        <button type="submit">
          Sign In
        </button>
      </form>
    </section>
  )
}