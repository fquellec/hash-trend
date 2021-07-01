import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import DashCards from './DashCards';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'grid',
        alignContent: 'center',
        justifyContent: 'center',
    },
    title: {

    },
    loader: {
        display: 'grid',
        width:'100%',
        height:'200px',
        alignContent: 'center',
        justifyContent: 'center',
    },
  }));

function Loader(props) {
    const classes = useStyles();
    console.log(props)
    if (!props.loading) return (<DashCards {...props.data} />);
    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant="h5" component="h2">
                {props.status} 
            </Typography>
            <div className={classes.loader}>
                <CircularProgress disableShrink />
            </div>
        </div>
    );

}

export default Loader