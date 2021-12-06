import React from 'react';
import ExtraData from './ExtraData';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Chip,
  makeStyles
} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles({
  root: {
    marginTop: '1.5rem',

  },
  summaryContainer: {
    flexDirection: 'column',
  },
  summaryHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1rem'
    
  },
  chip: {
    marginLeft: '0.5rem'
  }
});




const Repository = ({repo, expanded, onToggled}) => {
  const classes = useStyles();
  //return the data of each repository
  return (
    <ExpansionPanel
      expanded={expanded}
      onChange={onToggled}
      className={classes.root}
    >
      <ExpansionPanelSummary classes={{content: classes.summaryContainer}}>
        <div className={classes.summaryHeader}>
          <Typography variant={'h5'}><b>Repository name:</b> {repo.name}</Typography>
          <div>
            <Chip label={`By ${repo.owner.login}`} avatar={<PeopleIcon/>} className={classes.chip}/>
          </div>
          <div>
          <Typography variant={'h5'}><b>Disk usage:</b> {repo.diskUsage}</Typography>
          </div>
        </div>
        <Typography
          variant={'caption'}
          component={'div'}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {expanded && (<ExtraData repoName={repo.name} repoOwner={repo.owner.login} />)}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Repository;
