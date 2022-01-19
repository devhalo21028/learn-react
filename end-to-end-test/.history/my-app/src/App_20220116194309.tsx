import { Routes, Route } from 'react-router-dom';
import Welcome from './general/components/Welcome';
import Login from './auth/components/Login';
import RequireAuth from './auth/components/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={(
            <RequireAuth>
              <Welcome />
            </RequireAuth>
          )}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
