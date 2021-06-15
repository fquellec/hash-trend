import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    fontSize: 24,

  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 12,

  },
});

export default function SimpleCard(props) {
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
            <Typography variant="h6" component="h5">
                {props.title}
            </Typography>
            <Typography className={classes.value} color="textSecondary">
                {props.value} {props.icon} 
            </Typography>
        </SimpleCard>
    );
}

export function StatCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.name}
          </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
