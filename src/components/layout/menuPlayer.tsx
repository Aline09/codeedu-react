import React from 'react';
import Image from 'next/image';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import SaveSongIcon from '../icons/player/saveSong';
import ControlSpotifyIcon from '../icons/player/controlSpotify';
import LyricsIcon from '../icons/player/lyrics';
import ConnectDeviceIcon from '../icons/player/connectDevice';
import VolumeIcon from '../icons/player/volume';
import Album from '../../../public/album.jpeg';
import PlaybackBar from './soundtrackPlayer';
import VolumeBar from './volumeBar';
import { useSelector } from "react-redux";
import { Store } from "../../store/reducers";
import { PlayingSoundtrack } from '../../models/types';
import SoundtrackPlayer from './soundtrackPlayer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
      background: theme.palette.background.default,
      border: `1px solid ${theme.palette.divider}`,
      zIndex: 10000,
      height: '90px',
      padding: '0 16px',
      justifyContent: 'center'
    },
    icon:{
        fill: theme.palette.text.primary
    }, 
    songName:{
      fontSize: "14px",
      lineHeight: "16px",
      "& a":{
        color: theme.palette.text.secondary,
      },
      [theme.breakpoints.down('md')]: { //1279px
        paddingRight:"10px"
      },
    },
    artistName:{
      fontSize: "11px",
      lineHeight: "16px",
      "& a": {
        color: theme.palette.text.primary,
      }
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
      [theme.breakpoints.down('md')]: { //1279px
        position: "absolute",
        top: "32px",
        right: "10px"
      },
    },
    song: {
      margin: "0px 14px",
      flexDirection: "column",
      [theme.breakpoints.down('md')]: { //1279px
        flexDirection: "row",
        padding: 0
      },
    },
    hideMediumWidth:{
      [theme.breakpoints.down('md')]: { //1279px
        display: "none"
      },
    },
    albumInfo: {
      alignItems: "center",
      [theme.breakpoints.down('md')]: { //1279px
        justifyContent: "center"
      },
    }
  })
);

export default function Player() {
  const classes = useStyles();
  const playingSoundtrack: PlayingSoundtrack = useSelector(({playingSoundtrackReducer} : Store) => playingSoundtrackReducer);
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <>
    <AppBar position="fixed" color="primary" component="footer" className={classes.appBar}>
    <Toolbar disableGutters>
      <Grid container spacing={3}>
        <Grid item container xs className={classes.albumInfo}>
          <Grid item className={classes.hideMediumWidth}>
            {
              playingSoundtrack.albumImage ?  
                <Image alt="Album image" src={playingSoundtrack.albumImage} width={56} height={56}/> :
                "Image"
            }
          </Grid>
          <Grid item>
            <Grid container className={classes.song}>
              <Grid item>
              <Typography className={classes.songName}>
                <Link href="#" onClick={preventDefault} color="primary">
                  {playingSoundtrack.soundtrackName}
                </Link>
              </Typography>
              </Grid>
              <Grid item>
              <Typography className={classes.artistName}>
                <Link href="#" onClick={preventDefault} color="primary">
                  {playingSoundtrack.artistName}
                </Link>
              </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.hideMediumWidth}>
            <IconButton color="primary" aria-label="upload picture" component="span" className={classes.buttonIcon}>
              <SaveSongIcon className={classes.icon}/>
            </IconButton>
          </Grid>
          <Grid item className={classes.hideMediumWidth}>
            <IconButton color="primary" aria-label="upload picture" component="span" className={classes.buttonIcon}>
              <ControlSpotifyIcon className={classes.icon}/>
            </IconButton>
          </Grid>
        </Grid>
        <SoundtrackPlayer/>
        <Grid item container xs wrap="nowrap" justifyContent="flex-end" alignItems="center" className={classes.hideMediumWidth}>
          <Grid item>
            <IconButton color="primary" aria-label="upload picture" component="span" className={classes.buttonIcon}>
              <LyricsIcon className={classes.icon}/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary" aria-label="upload picture" component="span" className={classes.buttonIcon}>
              <ConnectDeviceIcon className={classes.icon}/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary" aria-label="upload picture" component="span" className={classes.buttonIcon}>
              <VolumeIcon className={classes.icon}/>
            </IconButton>
          </Grid>
          <Grid item>
           <VolumeBar/>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
    </AppBar>
    </>
  );
}