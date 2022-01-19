import './App.css';
import { Header } from './Header'
import { SignInForm } from './signin/SignInForm';

function App() {
  return (
    <div className="App">
      <Header name="Test App"/>
      <SignInForm />
    </div>
  );
}

export default App;
