import './SignInForm.css'

import { useState } from 'react'

export const SignInForm = () => {
  const [formState, setState] = useState({
    username: '',
    password: ''
  })

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