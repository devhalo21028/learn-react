/** @jsxImportSource @emotion/react */

import { Routes, Route } from 'react-router-dom';
import { css } from '@emotion/react';
import { Welcome } from './general/components/Welcome';
import { Login } from './auth/components/Login';
import { RequireAuth } from './auth/components/RequireAuth';

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div css={css`
      display: flex;
      height: 100%;
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
        </BrowserRouter>
      </PersistGate>
    </Provider>

  );
}
