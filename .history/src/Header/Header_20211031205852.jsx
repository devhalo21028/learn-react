import './Header.css'

const Header = ({
  name
}) => {

  return (
    <header className="app-header">
      <p>{name}</p>
    </header>
  )
}

export default Header