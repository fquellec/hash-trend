import React from "react";
import Frame from "../components/frame";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import BarChart from "../components/graphs/BarChart"
import PieChart from "../components/graphs/PieChart"
import BasicTable from "../components/Table";
import ForceGrah from "../components/graphs/ForceGraph";
import BarRace from "../components/graphs/BarRace";
import Typography from '@material-ui/core/Typography';
import { SingleValueCard, StatCard } from "../components/Card"
import TwitterIcon from '@material-ui/icons/Twitter';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
import RepeatIcon from '@material-ui/icons/Repeat';
import TweetList from '../components/TweetList';
import WorldMap from '../components/graphs/WorldMap'

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
                            <BarChart/>
                        </StatCard>
                    </Grid>
                    <Grid item key="sentiment" xs={12} sm={12} md={4}>  
                        <StatCard title="General sentiments of the tweets">
                            <PieChart/>
                        </StatCard>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={4}>  
                        <StatCard title="Hashtags Race">
                            <BarRace/>
                        </StatCard>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={4}>  
                        <StatCard title="Top Accounts">
                            <BasicTable/>
                        </StatCard>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={12}>  
                        <StatCard title="Retweet Interaction Graph">
                            <ForceGrah id="forceGraph" />
                        </StatCard>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={4}>  
                        <StatCard title="Top Tweets">
                            <TweetList/>
                        </StatCard>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={8}>  
                        <StatCard title="Location">
                            <WorldMap />
                        </StatCard>
                    </Grid>
                </Grid>
            </Container>
        </Frame>
    );
}

export default DashBoardPage;