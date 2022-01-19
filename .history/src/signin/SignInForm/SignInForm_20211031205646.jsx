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
    password: '',
    isButtonEnabled: false
  })

  

  const onInputChange = (e) => {
    const newFormState = {
      ...formState,
      [e.target.name]: e.target.value
    }

    const isButtonEnabled = newFormState.username !== '' && newFormState.password !== ''

    setFormState({
      ...newFormState,
      isButtonEnabled
    })    
  }

  // const [
  //   username,
  //   setUsername
  // ] = useState('')

  // const onInputChange = (e) => {
  //   setUsername(e.target.value)
  // }

  const onSubmit = (e) => {
    handleSubmit(formState)

    e.preventDefault()
  }

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
        <button 
          type="submit"
          disabled={!formState.isButtonEnabled}
        >
          Sign In
        </button>
      </form>
    </section>
  )
}