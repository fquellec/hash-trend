import React from "react";
import Frame from "../components/frame";
import SimpleCard from "../components/Card"
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import LineChart from "../components/graphs/LineChart"
import GaugeChart from "../components/graphs/GaugeChart"
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
    },
  }));

const DashBoardPage = (props) => {
    const classes = useStyles();
    return (
        <Frame withSideBar={true}>
            <Typography className={classes.pos} color="textSecondary">
                Query : {props.location.search.slice(1)}
            </Typography>
            <Container className={classes.cardGrid} maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item key="nb-tweets-total" xs={6} sm={6} md={3}>  
                        <SimpleCard>
                        </SimpleCard>
                    </Grid>
                    <Grid item key="nb-tweets-retweet" xs={6} sm={6} md={3}>  
                        <SimpleCard>
                        </SimpleCard>
                    </Grid>
                    <Grid item key="nb-tweets-reply" xs={6} sm={6} md={3}>  
                        <SimpleCard>
                        </SimpleCard>
                    </Grid>
                    <Grid item key="nb-tweets-original" xs={6} sm={6} md={3}>  
                        <SimpleCard>
                        </SimpleCard>
                    </Grid>
                    <Grid item key="nb-tweets" xs={12} sm={12} md={12}>  
                        <SimpleCard>
                            <LineChart/>
                        </SimpleCard>
                    </Grid>
                    <Grid item key="sentiment" xs={12} sm={12} md={7}>  
                        <SimpleCard>
                            <GaugeChart/>
                        </SimpleCard>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={5}>  
                        <SimpleCard>
                            <GaugeChart/>
                        </SimpleCard>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={4}>  
                        <SimpleCard>
                            <GaugeChart/>
                        </SimpleCard>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={4}>  
                        <SimpleCard>
                            <GaugeChart/>
                        </SimpleCard>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={4}>  
                        <SimpleCard>
                            <GaugeChart/>
                        </SimpleCard>
                    </Grid>
                </Grid>
            </Container>
        </Frame>
    );
}

export default DashBoardPage;