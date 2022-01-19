/** @jsxImportSource @emotion/react */

import {
  AppBar, Toolbar, IconButton, Typography, Button,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { css } from '@emotion/react';

export function Welcome() {
  return (
    <section
      css={css`
      
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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </section>
  );
}
