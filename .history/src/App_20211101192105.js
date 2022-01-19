import { useState } from 'react'
import Header from './Header'
import SignInForm from './signin/SignInForm';


import './App.css';

function App() {
  
  const [
    isLoggedIn,
    setIsLoggedIn
  ] = useState(false)

  const onFormSubmit = (data) => {
    const {
      username,
      password
    } = data

    if(username === 'hello' && password === 'world') {
      setIsLoggedIn(true)
    }
  }

  return (
    <div className="App">
      <Header name="Test App"/>
      { 
        !isLoggedIn && 
        <SignInForm handleSubmit={onFormSubmit}/>
      }
      {
        isLoggedIn &&
        <p>Logged In</p>
      }
    </div>
  );
}

export default App;
