import { Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './general/components/Welcome';
import Login from './auth/components/Login';
import RequireAuth from './auth/components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <RequireAuth>

          <Route path="/" element={<Welcome />} />
        </RequireAuth>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
