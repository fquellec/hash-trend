import React from "react";
import Frame from "../components/frame";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import LineChart from "../components/graphs/LineChart"
import GaugeChart from "../components/graphs/GaugeChart"
import Typography from '@material-ui/core/Typography';
import { SingleValueCard, StatCard } from "../components/Card"
import TwitterIcon from '@material-ui/icons/Twitter';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
import RepeatIcon from '@material-ui/icons/Repeat';

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
                        <SingleValueCard     
                            title = "Total"
                            value = "232100"
                            icon = {<TwitterIcon/>}
                        />
                    </Grid>
                    <Grid item key="nb-tweets-retweet" xs={6} sm={6} md={3}>  
                        <SingleValueCard     
                            title = "Likes"
                            value = "3100"
                            icon = {<FavoriteIcon/>}
                        />
                    </Grid>
                    <Grid item key="nb-tweets-reply" xs={6} sm={6} md={3}>  
                        <SingleValueCard     
                            title = "Comments"
                            value = "21100"
                            icon = {<ChatIcon/>}
                        />
                    </Grid>
                    <Grid item key="nb-tweets-original" xs={6} sm={6} md={3}>  
                        <SingleValueCard     
                            title = "Retweets"
                            value = "10230"
                            icon = {<RepeatIcon/>}
                        />
                    </Grid>
                    <Grid item key="nb-tweets" xs={12} sm={12} md={12}>  
                        <StatCard title="Number of tweets per day">
                            <LineChart/>
                        </StatCard>
                    </Grid>
                    <Grid item key="sentiment" xs={12} sm={12} md={7}>  
                        <StatCard title="General sentiments of the tweets">
                            <GaugeChart/>
                        </StatCard>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={5}>  
                        <StatCard title="Hashtags Race">
                            <GaugeChart/>
                        </StatCard>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={4}>  
                        <StatCard title="Top Accounts">
                            <GaugeChart/>
                        </StatCard>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={4}>  
                        <StatCard title="Top Tweets">
                            <GaugeChart/>
                        </StatCard>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={4}>  
                        <StatCard title="Retweet Interaction Graph">
                            <GaugeChart/>
                        </StatCard>
                    </Grid>
                </Grid>
            </Container>
        </Frame>
    );
}

export default DashBoardPage;