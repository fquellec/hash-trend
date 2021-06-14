import React from "react";
import Link from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Frame from "../components/frame";
import SimpleCard from "../components/Card"
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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
          <small>Twitter will no longer be a </small>
          </Typography>
          <InputBase
            className={classes.input}
            placeholder="Search for a keyword, hashtag or account"
            inputProps={{ 'aria-label': 'Search for a keyword, hashtag or account' }}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              <Grid item key="Search" xs={12} sm={6} md={4}>  
                <SimpleCard name="Search for trending topics/debates">
                </SimpleCard>
              </Grid>
              <Grid item key="Get Insight" xs={12} sm={6} md={4}>  
              <SimpleCard name="Get useful insight about it">
                </SimpleCard>
              </Grid>
              <Grid item key="Export" xs={12} sm={6} md={4}>  
              <SimpleCard name="Export and embed the graphs you like in html format"/>
              </Grid>
            </Grid>
          </Container>
      </Frame>
    </div>
    );
}

export default SearchPage;