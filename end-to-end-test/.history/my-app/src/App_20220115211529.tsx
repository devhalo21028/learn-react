import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

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
