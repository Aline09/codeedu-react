import React, { FC } from "react";
import { 
  createStyles, 
  Theme, 
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  ListItemSecondaryAction 
} from "@material-ui/core";
import SaveSongIcon from '../icons/player/saveSong';
import OptionsIcon from '../icons/general/options';
import { getTimeInSecs, calculateTimeValue } from '../../utils';

type Props = {
  children: JSX.Element
  primary: string
  secondary?: string
  soundtrackTime: number
  onClick?: () => void | undefined
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  soundtracksList:{
    width: "100%",
    padding: "0px",
  },
  soundtracksListItem:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "center",
    width: '100%',
    height: "56px",
    paddingLeft: '10px',
    borderRadius: "4px",
    "&:hover":{
      backgroundColor: "rgba(255,255,255,.1)",
      "& svg":{
        opacity: "0"
      }
    }
  },
  soundtracksListAvatar:{marginTop: "0px"},
  soundtracksListItemText:{
    "& span":{
        fontSize: "16px",
        fontWeight: 400,
        letterSpacing: "normal",
        lineHeight: "24px",
        textTransform: "none",
        color: theme.palette.primary.contrastText
    },
    "& p":{
        color: theme.palette.text.primary,
        fontSize: "14px",
        fontWeight: 400,
        letterSpacing: "normal",
        lineHeight: "16px",
        textTransform: "none"
    }
  },
  soundtracksListItemDetail:{
    display: "flex",
    alignItems: "center",
    "& span":{
        color: theme.palette.text.primary,
        fontSize: "14px",
        fontWeight: 400,
        letterSpacing: "normal",
        lineHeight: "16px",
        textTransform: "none"
    }
  },
  soundtrackTime:{
    margin: "0 16px"
  },
  saveSongIcon:{
    fill: theme.palette.text.primary,
  },
  optionsIcon:{
    fill: theme.palette.primary.contrastText,
    fillOpacity: 0.6,
  }
}))

const SoundtrackList:FC<Props> = ({children, primary, secondary, soundtrackTime, onClick}) => {
  const classes = useStyles();

  return (
      <List className={classes.soundtracksList}>
        <ListItem alignItems="flex-start" className={classes.soundtracksListItem} onClick={onClick}>
          <ListItemAvatar className={classes.soundtracksListAvatar}>
              {children}
          </ListItemAvatar>
          <ListItemText
            primary={primary}
            secondary={secondary}
            className={classes.soundtracksListItemText}
          />
          <ListItemSecondaryAction className={classes.soundtracksListItemDetail}>
            <SaveSongIcon className={classes.saveSongIcon}/>
            <Typography className={classes.soundtrackTime} component="span">{calculateTimeValue(getTimeInSecs(soundtrackTime))}</Typography>
            <OptionsIcon className={classes.optionsIcon}/>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
  )
}

export default SoundtrackList

