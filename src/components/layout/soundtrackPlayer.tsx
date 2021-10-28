/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from "react-redux"; 
import { Store } from "../../store/reducers";
import { Grid, IconButton } from '@material-ui/core';
import RandomSongsIcon from '../icons/player/randomSongs';
import BackIcon from '../icons/player/back';
import ForwardIcon from '../icons/player/forward';
import PlayIcon from '../icons/player/play';
import PauseIcon from '../icons/player/pause';
import RepeatIcon from '../icons/player/repeat';
import { getTimeInSecs, calculateTimeValue } from "../../utils";


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
      width: '100%'
    },
    playbackContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center'
    },
    playbackBar:{
      width: "61%",
      marginTop: "12px", 
      backgroundColor: theme.palette.text.primary,
        "& div":{
          backgroundColor: theme.palette.text.secondary
      },
      [theme.breakpoints.down('md')]: { //1279px
        width: "40%",
      },
    },
    playbackTimer:{
        minWidth: "40px",
        fontSize: "11px",
        margin: "0px 5px",
        textAlign: "center",
    color: theme.palette.text.primary
  },
  icon:{
      fill: theme.palette.text.primary
  },
  playPauseIcon:{
    fill: theme.palette.common.black
  },
  buttonIcon:{
    width: '32px',
    padding: '0px'
  },
  buttonPlayIcon: {
    height: '32px',
    width: '32px',
    padding: '0px',
    background: theme.palette.text.secondary,
    margin: "0 10px",
    transition: 'none 33ms cubic-bezier(.3,0,.7,1)',
    "&:hover":{
      transform: 'scale(1.1)',
      background: theme.palette.text.secondary,
    },
    '&.Mui-disabled': {
      background: theme.palette.text.secondary,
      opacity: 0.6,
    },
    [theme.breakpoints.down('md')]: { //1279px
      position: "absolute",
      top: "35%",
      right: "10px"
    },
  },
    hideMediumWidth:{
      [theme.breakpoints.down('md')]: { //1279px
        display: "none"
      },
    },
}))

  
function LinearProgressWithLabel() {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  // Get time and execution status from store
  const {
    soundtrackTime,
    isPlayingSoundtrack
  } = useSelector(({playingSoundtrackReducer} : Store) => playingSoundtrackReducer);

  // Getting soundtrack time in seconds
  const soundtrackTimeInSecs = useMemo(() => {
    return getTimeInSecs(soundtrackTime)
  }, [soundtrackTime]);


  // Setting soundtrack progress 
  const [progress, setProgress] = React.useState(0);


  React.useEffect(() => {
    if(progress == soundtrackTimeInSecs){
      dispatch({
        type: "PLAYER_ACTIONS_SAGA", 
        payload: false
      });
    }
  }, [progress, soundtrackTimeInSecs]);

  React.useEffect(() => {
    if(isPlayingSoundtrack){
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress == soundtrackTimeInSecs ? 0 : prevProgress + 1));
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [progress, isPlayingSoundtrack, soundtrackTimeInSecs]);

  const normalise = (value: number) => (value - 0) * 100 / (soundtrackTimeInSecs - 0);

  return (
    <div className={classes.playbackContainer}>
      <div>
        <Typography variant="body2" color="textSecondary" className={classes.playbackTimer}>
        {calculateTimeValue(progress)}
        </Typography>
      </div>
        <LinearProgress variant="determinate" className={classes.playbackBar} value={normalise(progress)}/>
      <div>
        <Typography variant="body2" color="textSecondary" className={classes.playbackTimer}>
          {calculateTimeValue(soundtrackTimeInSecs)}
        </Typography>
      </div>
    </div>
  );
}


export default function SoundtrackPlayer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    soundtrackName,
    soundtrackTime,
    isPlayingSoundtrack
  } = useSelector(({playingSoundtrackReducer} : Store) => playingSoundtrackReducer);

  const toggleSoundtrackExecution = () => {
    dispatch({
      type: "PLAYER_ACTIONS_SAGA", 
      payload: !isPlayingSoundtrack
    });
  }

  const disable = soundtrackName.length ? false : true
 
  return (
    <Grid item container direction="column" md={12} lg={6}>
      <Grid item container justifyContent="center" alignItems="center">
        <Grid item className={classes.hideMediumWidth}>
          <IconButton color="primary" aria-label="upload picture" component="span" className={classes.buttonIcon}>
            <RandomSongsIcon className={classes.icon}/>
          </IconButton>
        </Grid>
        <Grid item className={classes.hideMediumWidth}>
          <IconButton color="primary" aria-label="upload picture" component="span" className={classes.buttonIcon}>
            <BackIcon className={classes.icon}/>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={toggleSoundtrackExecution} color="primary" aria-label="upload picture" component="span" className={classes.buttonPlayIcon} disabled={disable}>
            {isPlayingSoundtrack ? <PauseIcon className={classes.playPauseIcon}/> : <PlayIcon className={classes.playPauseIcon}/>}
          </IconButton>
        </Grid>
        <Grid item className={classes.hideMediumWidth}>
          <IconButton color="primary" aria-label="upload picture" component="span" className={classes.buttonIcon}>
            <ForwardIcon className={classes.icon}/>
          </IconButton>
        </Grid>
        <Grid item className={classes.hideMediumWidth}>
          <IconButton color="primary" aria-label="upload picture" component="span" className={classes.buttonIcon}>
            <RepeatIcon className={classes.icon}/>
          </IconButton>
        </Grid>
    </Grid>
    <Grid item>
      <div className={classes.root}>
        <LinearProgressWithLabel/>
      </div>
    </Grid>
  </Grid>
  );
}