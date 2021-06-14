import React from "react";
import Frame from "../components/frame";
import SimpleCard from "../components/Card"
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  }));

const DashBoardPage = (props) => {
    const classes = useStyles();
    return (
        <Frame withSideBar={true}>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item key="Search" xs={12} sm={12} md={12}>  
                        <SimpleCard/>
                    </Grid>
                    <Grid item key="Export" xs={12} sm={6} md={7}>  
                        <SimpleCard/>
                    </Grid>
                    <Grid item key="Search" xs={12} sm={7} md={5}>  
                        <SimpleCard/>
                    </Grid>
                    <Grid item key="Get Insight" xs={12} sm={6} md={4}>  
                        <SimpleCard/>
                    </Grid>
                    <Grid item key="Export" xs={12} sm={6} md={4}>  
                        <SimpleCard/>
                    </Grid>
                    <Grid item key="Export" xs={12} sm={6} md={4}>  
                        <SimpleCard/>
                    </Grid>
                </Grid>
            </Container>
        </Frame>
    );
}

export default DashBoardPage;