/** @jsxImportSource @emotion/react */

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { css } from '@emotion/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Welcome } from './general/components/Welcome';
import { Login } from './auth/components/Login';
import { RequireAuth } from './auth/components/RequireAuth';
import { store, persistor } from './store';
import { RedirectAuth } from './auth/components/RedirectAuth';

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div
            css={css`
              display: flex;
              height: 100%;
            `}
          >
            <Routes>
              <Route
                path="/"
                element={<RequireAuth component={Welcome} />}
              />
              <Route
                path="/login"
                element={<RedirectAuth component={Login} />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
