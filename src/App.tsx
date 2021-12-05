import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';
import {Typography, Container, makeStyles} from "@material-ui/core";
import RepositoryList from "./RepositoryList";

//style in react
const useStyles = makeStyles({
  title: {
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center'
  }
});

//appliction initialize
const App = () => {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <Container maxWidth={'md'}>
        <Typography variant={'h3'} className={classes.title}>Github Scanner</Typography>
        <RepositoryList/> 
      </Container>
    </ApolloProvider>
  );
};

export default App;
