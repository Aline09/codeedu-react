import React from 'react';
import { createStyles, Theme, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import createPlaylistIcon from "../icons/menu/createPlaylist";
import Image from 'next/image';
import HomeIcon from '../icons/menu/home';
import Home from '../../pages';
import SearchIcon from '../icons/menu/search';
import SearchIconActive from '../icons/menu/searchActive';
import LibraryIcon from '../icons/menu/library';
import CreatePlaylistIcon from '../icons/menu/createPlaylist';
import LogoIcon from '../icons/menu/logo';
import LogoSmallIcon from '../icons/menu/logoSmall';
import HeartIcon from '../icons/menu/heart';
import DownloadAppIcon from '../icons/menu/downloadApp';
import Link from 'next/link';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      flexShrink: 0,
    },
    drawerPaper: {
      width: "290px",
      overflowY: "hidden",
      padding: "24px 0 0",
      border: "none",
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down('md')]: {
        width: "75px"
      },
    },
    toolbar: {
      minHeight: "40px",
      padding: "0px 24px",
      marginBottom: "18px"
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
    },
    listSpacing: {
      padding: "8px"
    },
    listItemSpacing:{
      padding: "0 16px",
      height: "40px",
      '&:hover': {
        '& span':{
          color: theme.palette.text.secondary
        },
        '& path':{
          fill: theme.palette.text.secondary
        },
      },
    },
    listIconSpacing:{
      minWidth: "0px",
      paddingRight: "16px",
    },
    navListItemText: {
        "& span":{
        fontSize: "14px",
        fontWeight: 700,
        color: theme.palette.text.primary,
        [theme.breakpoints.down('md')]: { //1279px
          display: "none"
        },
      }
    },
    playlistItemText:{
      padding: "0px",
      margin: "0px",
      "& span":{
        fontSize: "14px",
        fontWeight: 400,
        color: theme.palette.text.primary,
      },
      '&:hover': {
        '& span':{
          color: theme.palette.text.secondary
        }
      },
      [theme.breakpoints.down('md')]: { //1279px
        display: "none"
      },
    },
    icon:{
       fill: theme.palette.text.primary,
    },
    actionlistItemSpacing:{
      '&:hover': {
        '& span':{
          opacity: "1"
        },
        '& div':{
          opacity: 1
        }
      },
    },
    actionlistItemAvatar:{
      minWidth: "24px",
      marginRight: "16px"
    },
    actionListItemText:{
      "& span":{
        opacity: "0.7",
        transition: "opacity .2s linear",
        fontSize: "14px",
        fontWeight: 700,
        color: theme.palette.text.secondary,
        margin: "0px",
        [theme.breakpoints.down('md')]: { //1279px
          display: "none"
        },
      }
    },
    actionListIcon:{
      minWidth: "24px",
      display: 'flex',
      justifyContent: 'center'
    },
    avatarCreatePlaylistIcon:{
      fill: theme.palette.common.black
    },
    avatarCreatePlaylist: {
      opacity: "0.7",
      backgroundColor: theme.palette.text.secondary,
      transition: "opacity .2s linear",
      borderRadius: theme.likedSongsButton.borderRadius,
      width: "24px",
      height: "24px"
    },
    avatarLikedSongs: {
      opacity: "0.7",
      transition: "opacity .2s linear",
      background: theme.likedSongsButton.background,
      borderRadius: "1px",
      width: "24px",
      height: "24px"
    },
    divider:{
      backgroundColor: theme.palette.divider,
      margin: "0 24px",
    },
    logo: {
      fill: theme.palette.getContrastText(theme.palette.primary.main),
    }
  }),
);

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar}>
          {
             isMediumScreen ?
            <LogoSmallIcon className={classes.logo} /> :
            <LogoIcon className={classes.logo} /> 
          }
        </div>
        <List component="nav" className={classes.listSpacing}>
          <ListItem className={classes.listItemSpacing} component="a" href="/">
            <ListItemIcon className={classes.listIconSpacing}>
              <HomeIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText primary="Início" className={classes.navListItemText}/>
          </ListItem>
          <ListItem className={classes.listItemSpacing} component="a" href="/search">
            <ListItemIcon className={classes.listIconSpacing}>
              <SearchIcon fill={theme.palette.text.primary}/>
            </ListItemIcon>
            <ListItemText primary={"Buscar"} className={classes.navListItemText}/>
          </ListItem>
          <ListItem className={classes.listItemSpacing} component="a" href="/">
            <ListItemIcon className={classes.listIconSpacing}>
              <LibraryIcon fill={theme.palette.text.primary}/>
            </ListItemIcon>
            <ListItemText primary={"Sua Biblioteca"} className={classes.navListItemText}/>
          </ListItem>
        </List>
        <List className={classes.listSpacing}>
          <ListItem button className={classes.actionlistItemSpacing}>
            <ListItemAvatar className={classes.actionlistItemAvatar}>
              <Avatar variant="square" className={classes.avatarCreatePlaylist}>
              <ListItemIcon className={classes.actionListIcon}>
                <CreatePlaylistIcon className={classes.avatarCreatePlaylistIcon}/>
              </ListItemIcon>
              </Avatar>
             </ListItemAvatar>
            <ListItemText primary={"Criar Playlists"} className={classes.actionListItemText}/>
          </ListItem>
          <ListItem button className={classes.actionlistItemSpacing}>
            <ListItemAvatar className={classes.actionlistItemAvatar}>
              <Avatar variant="square" className={classes.avatarLikedSongs}>
                <ListItemIcon className={classes.actionListIcon}>
                  <HeartIcon fill={theme.palette.text.secondary}/>
                </ListItemIcon>
              </Avatar>
              </ListItemAvatar>
            <ListItemText primary={"Músicas Curtidas"} className={classes.actionListItemText}/>
          </ListItem>
        </List>
        <Divider className={classes.divider}/>
        <List className={classes.listSpacing}>
          <ListItem button>
            <ListItemText primary={"Minha playlist nº 3"} className={classes.playlistItemText}/>
          </ListItem>
          <ListItem button>
            <ListItemText primary={"Minha playlist nº 2"} className={classes.playlistItemText}/>
          </ListItem>
          <ListItem button>
            <ListItemText primary={"Minha playlist nº 1"} className={classes.playlistItemText}/>
          </ListItem>
        </List>
      </Drawer>
  );
}