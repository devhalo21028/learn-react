import './SignInForm.css'

export const SignInForm = () => {

  return (
    <section className="sign-in-form">
      <form>
        <input type="text" />
        <input type="password" />
        <button type="submit">
          Sign In
        </button>
      </form>
    </section>
  )
}