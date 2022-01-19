import { Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './general/components/Welcome';
import Login from './auth/components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
