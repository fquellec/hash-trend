import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { makeStyles } from '@material-ui/core/styles';
import domtoimage from 'dom-to-image';
import fileDownload from "js-file-download";

const ITEM_HEIGHT = 48;
const useStyles = makeStyles({
    MenuItem: {
     fontSize: 12,
     fontWeight: 345,
    },
    LinkItem: {
      color: 'inherit',
      textDecoration: 'inherit',
    }
  });

export default function CardDropDown(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const {id, data} = props;


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleImage = () => {
    domtoimage.toBlob(document.getElementById(id))
      .then(function (blob) {
        fileDownload(blob, id + '.png');
      });
    handleClose();
  };

  const handleSVG = () => {
    domtoimage.toSvg(document.getElementById(id))
      .then(function (blob) {
        var link = document.createElement('a');
        link.download = id + '.svg';
        link.href = blob;
        link.click();
      });
    handleClose();
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

        <MenuItem key="sai" onClick={handleImage} className={classes.MenuItem}>
        Save as Image
        </MenuItem>
        <MenuItem key="eth" onClick={handleSVG} className={classes.MenuItem}>
        Export to SVG
        </MenuItem>
        <MenuItem key="dd" onClick={handleClose} className={classes.MenuItem}>
        <a
          type="button"
          href={`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(data)
          )}`}
          download={id + ".json"} 
          className={classes.LinkItem}
          >
        {`Download Data`}
        </a>
        </MenuItem>

      </Menu>
    </div>
  );
}
