import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { makeStyles } from '@material-ui/core/styles';


const ITEM_HEIGHT = 48;
const useStyles = makeStyles({
    MenuItem: {
     fontSize: 12,
     fontWeight: 345,
    },
  });

export default function CardDropDown() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="long-menu"
        elevation={3}
        anchorEl={anchorEl}
        //keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >

        <MenuItem key="sai" onClick={handleClose} className={classes.MenuItem}>
        Save as Image
        </MenuItem>
        <MenuItem key="eth" onClick={handleClose} className={classes.MenuItem}>
        Export to HTML
        </MenuItem>
        <MenuItem key="dd" onClick={handleClose} className={classes.MenuItem}>
        Download Data
        </MenuItem>

      </Menu>
    </div>
  );
}
