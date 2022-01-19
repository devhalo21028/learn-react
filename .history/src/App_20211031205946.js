import './App.css';
import Header from './Header'
import SignInForm from './signin/SignInForm';

function App() {
  const onFormSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="App">
      <Header name="Test App"/>
      <SignInForm handleSubmit={onFormSubmit}/>
    </div>
  );
}

export default App;
