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

export default function TweetList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {props.data.map((id) => (
            <ListItem>
              <Tweet tweetId={id} />
            </ListItem>
        ))}
      </List>  
    </div>
  );
}