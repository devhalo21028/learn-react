import './SignInForm'

export const SignInForm = () => {

  return (
    <section className="signin-form">
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