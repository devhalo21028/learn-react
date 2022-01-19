import './SignInForm.css'

import { useState } from 'react'

export const SignInForm = () => {
  const [
    formState, 
    setState
  ] = useState({
    username: '',
    password: ''
  })

  return (
    <section className="sign-in-form">
      <form>
        <input 
          type="text" 
          placeholder="Username"
          value={formState.username}
        />
        <input 
          type="password" 
          placeholder="Password"
          value={formState.password}
        />
        <button type="submit">
          Sign In
        </button>
      </form>
    </section>
  )
}