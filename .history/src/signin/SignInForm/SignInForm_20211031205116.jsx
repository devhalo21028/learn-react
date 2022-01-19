import './SignInForm.css'

import { useState } from 'react'

export const SignInForm = ({
  handleSubmit
}) => {
  const [
    formState, 
    setFormState
  ] = useState({
    username: '',
    password: ''
  })

  

  const onInputChange = (e) => {
    setFormState({
      ...formState,
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
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name="username"
          placeholder="Username"
          value={formState.username}
          onChange={onInputChange}
        />
        <input 
          type="password"
          name="password" 
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