/** @jsxImportSource @emotion/react */

import {
  AppBar, Toolbar, IconButton, Typography, Button,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { css } from '@emotion/react';
import { persistor } from '../../../store';
import { useNavigate } from 'react-router-dom';

export function Welcome() {
  const navigate = useNavigate()

  const handleLogout = async (e: React.FormEvent<HTMLFormElement>) => {
    await persistor.purge();

    navigate({
      
    })

    e.preventDefault();
  };

  return (
    <section
      css={css`
        flex: 1;
        display: flex;
        flex-direction: column;
      `}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button
            color="inherit"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <div>Hello world</div>
    </section>
  );
}
