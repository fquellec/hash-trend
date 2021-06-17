import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Tweet } from 'react-twitter-widgets'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxHeight: 350,
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TweetList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem>
            <Tweet tweetId="841418541026877441" />
        </ListItem>
        <ListItem>
            <Tweet tweetId="841418541026877441" />
        </ListItem>
        <ListItem>
            <Tweet tweetId="841418541026877441" />
        </ListItem>
        <ListItem>
            <Tweet tweetId="841418541026877441" />
        </ListItem>
        <ListItem>
            <Tweet tweetId="841418541026877441" />
        </ListItem>
      </List>  
    </div>
  );
}