import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';
import {Typography, Container, makeStyles} from "@material-ui/core";
import RepositoryList from "./RepositoryList";
import image from './Assets/git.png'


//style in react
const useStyles = makeStyles({
  title: {
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },

  photo: {
    width: '76px',
    heigth: '76px',
    marginLeft: '1rem',

  }
});

/*appliction initialize
Apollo Client is a comprehensive state management library, it enables you to use GraphQL to manage both local and remote data. 
connect Apollo Client to React with the ApolloProvider component.
ApolloProvider wraps your React app and places Apollo Client on the context, 
which enables you to access it from anywhere in your component tree.

*/

const App = () => {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
        <Container maxWidth={'md'}>
          <Typography variant={'h3'} className={classes.title}>Github Scanner   <img className={classes.photo} src={image} alt="git"></img></Typography>
          <RepositoryList/>
       </Container>
     </ApolloProvider>
  );
};

export default App;
