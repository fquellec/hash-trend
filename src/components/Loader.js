import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import DashCards from './DashCards';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
    LinkItem: {
        color: 'inherit',
        textDecoration: 'inherit',
    }
  }));

function Loader(props) {
    const classes = useStyles();
    console.log(props)
    if(props.error) return (
    <div className={classes.root}>
        <Typography className={classes.title} variant="h5" component="h2">
            {props.status} 
        </Typography>
    </div>
    );
    else if (!props.loading) return (
        <div>
            <DashCards {...props.data} /> 
            <Button variant="contained">
                <a
                    type="button"
                    href={`data:text/json;charset=utf-8,${encodeURIComponent(
                    JSON.stringify(props.data)
                    )}`}
                    download={props.query + ".json"} 
                    className={classes.LinkItem}
                    >
                    {`Download all tweets`}
                </a>
            </Button>
        </div>
    );
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