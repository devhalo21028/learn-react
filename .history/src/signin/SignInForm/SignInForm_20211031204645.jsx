import './SignInForm.css'

import { useState } from 'react'

export const SignInForm = () => {
  const [
    formState, 
    setFormState
  ] = useState({
    username: '',
    password: ''
  })

  

  const onInputChange = (e) => {
    setFormState({
      [e.target.name]: e.target.value
    })    
  }

  // const [
  //   username,
  //   setUsername
  // ] = useState('')

  // const onInputChange = (e) => {
  //   setUsername(e.target.value)
  // }

  return (
    <section className="sign-in-form">
      <form>
        <input 
          type="text" 
          placeholder="Username"
          value={username}
          onChange={onInputChange}
        />
        <input 
          type="password" 
          placeholder="Password"
          value={formState.password}
          onChange={onInputChange}
        />
        <button type="submit">
          Sign In
        </button>
      </form>
    </section>
  )
}