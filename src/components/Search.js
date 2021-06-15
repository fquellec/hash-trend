import React, { useState } from "react";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'grid',
      alignItems: 'center',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      maxWidth: '600px',
      width: '90%',
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
}));

function SearchForm(props) {
  
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        props.history.push({
            pathname: '/dashboard',
            search: `?${name}`,
        })
    }
    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit}>
            <InputBase
                className={classes.input}
                placeholder="Search for a keyword, hashtag or account"
                inputProps={{ 'aria-label': 'Search for a keyword, hashtag or account' }}
                value={name} 
                onChange={e => setName(e.target.value)}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </form>
)};

export default withRouter(SearchForm);