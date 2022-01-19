import { Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './general/components/Welcome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element="<Welcome />" />
      </Routes>
    </div>
  );
}

export default App;
