import {useQuery} from '@apollo/react-hooks';
import {CircularProgress, List, Typography, makeStyles} from '@material-ui/core';
import React from 'react';
import {GET_EXTRA_DATA} from './queries';

//style initialize
const useStyles = makeStyles({
  root: {
    flexDirection: 'column'
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  }
});





const ExtraData = ({repoName} : {repoName:any}) => {
  const classes = useStyles();
  const {data, loading, error} = useQuery(GET_EXTRA_DATA,
    {variables: {
        name: repoName,
      }});

  //on loading mode- also waiting for the return data
  if (loading) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress/>
      </div>
    );
  }
  

  if (error) {
    return (
      <Typography
        variant={'overline'}
        component={'div'}
        color={'error'}
      >
        {error}
      </Typography>
    )
  }



  return (
    <div className={classes.root}>
   
      <List>

      <Typography variant={'h4'}><b>Here is the extra data for:</b> {data.user.repository.name} </Typography><br/>
      <Typography variant={'h5'}><b>IsPrivate:</b> {String(data.user.repository.isPrivate)}</Typography><br/>
      <Typography variant={'h5'}><b>Text of .yml file in {data.user.repository.name} repository:</b><br/> {String(data.user.repository.object.text)}</Typography><br/>
      <Typography variant={'h5'}><b>Total files count on latest commit:</b> {parseInt(String(data.user.repository.ref.target.history.totalCount), 10)}</Typography>

      </List>
    </div>
  );
};


export default ExtraData;