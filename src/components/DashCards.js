import React from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import BarChart from "../components/graphs/BarChart"
import PieChart from "../components/graphs/PieChart"
import BasicTable from "../components/Table";
import ForceGrah from "../components/graphs/ForceGraph";
import BarTop from "./graphs/BarTop";
import { SingleValueCard, StatCard } from "../components/Card"
import TwitterIcon from '@material-ui/icons/Twitter';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RepeatIcon from '@material-ui/icons/Repeat';
import TweetList from '../components/TweetList';
import WorldMap from '../components/graphs/WorldMap'

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
    },
  }));

const DashCards = (props) => {
    console.log(props)
    const classes = useStyles();
    return (
            <Container className={classes.cardGrid} maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item key="nb-tweets-total" xs={6} sm={6} md={3}>  
                        <SingleValueCard     
                            title = "Total"
                            value = {props.generalInfos.nbTweets}
                            icon = {<TwitterIcon/>}
                        />
                    </Grid>
                    <Grid item key="nb-tweets-like" xs={6} sm={6} md={3}>  
                        <SingleValueCard     
                            title = "Likes"
                            value = {props.generalInfos.nbLikes}
                            icon = {<FavoriteIcon/>}
                        />
                    </Grid>
                    <Grid item key="nb-tweets-users" xs={6} sm={6} md={3}>  
                        <SingleValueCard     
                            title = "Users"
                            value = {props.generalInfos.nbUsers}
                            icon = {<AccountCircleIcon/>}
                        />
                    </Grid>
                    <Grid item key="nb-tweets-retweet" xs={6} sm={6} md={3}>  
                        <SingleValueCard     
                            title = "Retweets"
                            value = {props.generalInfos.nbRetweets}
                            icon = {<RepeatIcon/>}
                        />
                    </Grid>
                    <Grid item key="nb-tweets" xs={12} sm={12} md={12}>  
                        <StatCard id="nb-tweets-chart" title="Number of tweets per day" data={props.volumes}>
                            <BarChart data={props.volumes}/>
                        </StatCard>
                    </Grid>
                    <Grid item key="sentiment" xs={12} sm={12} md={4}>  
                        <StatCard id="sentiment-chart" title="General sentiments of the tweets" data={props.sentiment}>
                            <PieChart data={props.sentiment}/>
                        </StatCard>
                    </Grid>
                    <Grid item key="hashtags" xs={12} sm={12} md={4}>  
                        <StatCard id="hashtags-chart" title="Hashtags Top 10" data={props.hahstags_top_10}>
                            <BarTop data={props.hahstags_top_10}/>
                        </StatCard>
                    </Grid>
                    <Grid item key="top-accounts" xs={12} sm={12} md={4}>  
                        <StatCard id="top-accounts-chart" title="Top Accounts" data={props.top_actors}>
                            <BasicTable data={props.top_actors}/>
                        </StatCard>
                    </Grid>
                    <Grid item key="retweet-graph" xs={12} sm={12} md={12}>  
                        <StatCard id="retweet-graph-chart" title="Retweet Interaction Graph" data={props.graph}>
                            <ForceGrah id="forceGraph" data={props.graph}/>
                        </StatCard>
                    </Grid>
                    <Grid item key="top-tweets" xs={12} sm={12} md={4}>  
                        <StatCard id="top-tweets-list" title="Top Tweets" data={props.top_tweet}>
                            <TweetList data={props.top_tweet}/>
                        </StatCard>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={8}>  
                        <StatCard id="location-map" title="Location" data="">
                            <WorldMap />
                        </StatCard>
                    </Grid>
                </Grid>
            </Container>
    );
}

export default DashCards;