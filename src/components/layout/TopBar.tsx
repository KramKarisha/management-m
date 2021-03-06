import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
  createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MouseEvent, useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { MenuBar } from './MenuBar';

const styles = makeStyles((theme: Theme) => createStyles({
  appBar: {
    border: '1px solid #DDDDDD',
    borderRadius: '3px 3px 8px 8px',
  },
  root: {
    flexGrow: 4,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const TopBar = () => {
  const style = styles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const data = useContext(AuthContext);
  if (!data) return null;
  if (!data.photoURL) return null;
  return (
    <div className={style.root}>
      <AppBar position="static" color="default" className={style.appBar}>
        <Toolbar>
          <MenuBar />
          <Typography variant="h5" className={style.title}>
            {data.displayName}
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar alt="Cindy Baker" src={data.photoURL} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
