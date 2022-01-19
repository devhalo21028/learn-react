import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  MenuIcon,
} from '@mui/material';

export function Welcome() {
  return (
    <section className="login">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
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
