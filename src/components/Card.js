import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import CardDropDown from './CardDropDown';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    padding: '10px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  value: {
    textAlign: 'center',
    verticalAlign: 'top',
    fontSize: 24,
  },
  titleStats: {
    fontSize: 18,
  },
  values: {
      display: 'flex',
  },
  description: {
    textAlign: 'center',
    fontWeight: '300',
  },
  icon: {
    width: 60,
    height: 60,
    textAlign: 'left',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 12,

  },
});

export function SimpleCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
       {props.children}
      </CardContent>
    </Card>
  );
}

export function MainPageCard(props) {
    const classes = useStyles();
  
    return (
        <SimpleCard>
            <Typography variant="h5" component="h2">
                {props.icon} {props.title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                {props.subtitle}
            </Typography>
            <Typography className={classes.pos} variant="body2" component="p">
                {props.body}
            </Typography>
        </SimpleCard>
    );
}

export function SingleValueCard(props) {
    const classes = useStyles();
  
    return (
        <SimpleCard>
            <div className={classes.values}>
                <div className={classes.icon}>{props.icon}</div>
                <div>
                    <div className={classes.value}>{props.value} </div>
                    <p className={classes.description}>{props.title}</p>
                </div>
            </div>
        </SimpleCard>
    );
}

export function StatCard(props) {
  const classes = useStyles();

  const { id, title, data, children } = props;

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <CardDropDown id={id} data={data} />
        }
        titleTypographyProps={{className:classes.titleStats }}
        title={title}
      />
      <CardContent className={classes.cardContent}>
        <div id = {id}> 
          {children}
        </div> 
      </CardContent>
    </Card>
  );
}
