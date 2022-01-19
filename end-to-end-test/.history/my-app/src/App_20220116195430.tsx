/** @jsxImportSource @emotion/react */

import { Routes, Route } from 'react-router-dom';
import { css } from '@emotion/react';
import Welcome from './general/components/Welcome';
import Login from './auth/components/Login';
import RequireAuth from './auth/components/RequireAuth';

function App() {
  return (
    <div css={css`
      background: #111;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      height: 100%;
      width: 100%;
    `}
    >
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
