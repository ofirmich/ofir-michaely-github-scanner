import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Typography, makeStyles, CircularProgress} from '@material-ui/core';
import {GET_REPOS} from './queries';
import Repository from './Repository';

const useStyles = makeStyles({
  note: {
    marginTop: '2rem',
    textAlign: 'center',
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '1rem'
  }
});

const RepositoryList = () => {
  const classes = useStyles();
  //useState - first element is the initial state and second one is a function that is used for updating the state.
  const [expandedRepo, setExpandedRepo] = useState(null); 
  const {data, loading} = useQuery(GET_REPOS
    );


  useEffect(() => {
    setExpandedRepo(data);
  }, [data])


  //loading mode
  if (loading) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress />
      </div>
    );
  }


  return (
    <div>
      {data.user.repositories.nodes.map((repo , i) => (
        <Repository
          repo={repo}
          expanded={expandedRepo === i}
          onToggled={() => setExpandedRepo(i)}
          key={i}
        />
      ))}
    </div>
  );
};

export default RepositoryList;
