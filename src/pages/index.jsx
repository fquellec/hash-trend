import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import TimelineIcon from '@material-ui/icons/Timeline';
import Frame from "../components/frame";
import {MainPageCard} from "../components/Card"
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SearchForm from "../components/Search";

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'grid',
      alignItems: 'center',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      maxWidth: '600px',
      width: '90%',
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  }));

const SearchPage = () => {
    const classes = useStyles();
    return ( 
    <div className="App">
        <Frame withSideBar={false}>
          <Typography paragraph variant="h3">
          #Trend
          </Typography>
          <Typography paragraph variant="subtitle1">
          <small>Twitter will no longer have secrets for you </small>
          </Typography>
          <SearchForm/>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              <Grid item key="Search" xs={12} sm={6} md={4}>  
                <MainPageCard 
                  icon = {<SearchIcon/>} 
                  title = "Search" 
                  subtitle = ""
                  body = "search any hashtags, accounts or words, you will get all tweets containing these entities in the last week."
                />   
              </Grid>
              <Grid item key="Understand" xs={12} sm={6} md={4}>  
                <MainPageCard 
                  icon = {<TimelineIcon/>} 
                  title = "Visualize" 
                  subtitle = ""
                  body = "Once the tweets are retrieved, we analyse and visualise the debates on Twitter in a beautiful dashboard."
                />
              </Grid>
              <Grid item key="Export" xs={12} sm={6} md={4}>  
                <MainPageCard 
                  icon = {<ImportExportIcon/>} 
                  title = "Export" 
                  subtitle = ""
                  body = "You can easily export the graphics as an image or directly in html for integration into your website."
                />
              </Grid>
            </Grid>
          </Container>
      </Frame>
    </div>
    );
}

export default SearchPage;