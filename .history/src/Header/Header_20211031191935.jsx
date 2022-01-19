import './Header.css'

export const Header = ({
  name
}) => {

  return (
    <header className="app-header">
      <p>{name}</p>
    </header>
  )
}