import { GetServerSideProps, NextPage } from 'next';
import http from '../../http';
import { AlbumWithSoundtracks } from "../../../models/types";
import { Avatar, makeStyles, Theme, createStyles, Typography, List, ListSubheader, ListItem, ListItemIcon, ListItemText, Divider, ListItemAvatar } from '@material-ui/core'
import { PlayArrow as PlayArrowIcon, FavoriteBorder as FavoriteBorderIcon, MoreHoriz as MoreHorizIcon, Send as SendIcon, Album as AlbumIcon } from '@material-ui/icons'
import Layout from "../../components/layout";
import SoundtrackList from '../../components/soundtrackList';
import { useDispatch } from "react-redux"; 

interface AlbumDetailPageProps {
    album: AlbumWithSoundtracks
}

const drawerWidth = 290;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        marginLeft: drawerWidth,
        minHeight: "100vh",
        height: "fit-content",
        overflowY: "auto",
        paddingBottom: "100px",
        [theme.breakpoints.down('md')]: {
          width: `calc(100% - 75px)`,
          marginLeft: "75px",
        },
    },
    soundtrackListAvatar: {
        backgroundColor: 'transparent', 
        color: theme.palette.primary.contrastText
    },
    headerContent: {
        display: 'flex', 
        padding: 25, 
        flexDirection: 'row'
    },
    headerContentPhoto: {
        height: 200, 
        width: 200
    },
    headerContentInfo: {
        display: 'flex', 
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'flex-end', 
        paddingLeft: 25
    },
    headerContentInfoTitle: {
        fontSize: 12, 
        lineHeight: '12px', 
        margin: 0, 
        fontWeight: 700, 
        color: theme.palette.primary.contrastText, 
        textTransform: 'uppercase'
    },
    headerContentInfoName: {
        fontSize: 96, 
        lineHeight: '96px', 
        margin: 0, 
        marginTop: 10, 
        marginBottom: 10, 
        fontWeight: 900, 
        color: theme.palette.primary.contrastText
    },
    headerContentInfoDescriptionContent: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    headerContentInfoDescriptionAvatar: {
        height: 20, 
        width: 20, 
        marginRight: 10
    },
    headerContentInfoDescription: {
        color: theme.palette.primary.contrastText
    },
    soundtrackContainer: {
        backgroundColor: 'rgba(0,0,0,0.2)', 
        paddingBottom: 90, 
        paddingLeft: 25, 
        paddingRight: 25
    },
    soundtrackHeader: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingTop: 25, 
        paddingBottom: 25
    },
    soundtrackHeaderAvatar: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.primary.contrastText,
        height: 56, 
        width: 56
    },
    soundtrackHeaderAvatarIcon: {
        height: 28, 
        width: 28, 
        color: theme.palette.primary.contrastText
    },
    soundtrackHeaderIcon: {
        marginLeft: 32,
        height: 32, 
        width: 32, 
        color: theme.palette.primary.contrastText
    },
    soundtrackContentSubHeader: {
        marginBottom: 30
    },
    soundtrackSubHeader: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center'
    }
}));

const AlbumDetailPage: NextPage<AlbumDetailPageProps> = ({album}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Layout 
            header={(
                <>
                </>
            )}
        >  
            <main className={classes.content}>
                <div className={classes.toolbar} />
                
                <div className={classes.headerContent}>
                    <Avatar variant="square" className={classes.headerContentPhoto} alt="Remy Sharp" src={`/albumLarge/${album.id}.jpg`} />
                    <div className={classes.headerContentInfo}>
                        <Typography component="h2" className={classes.headerContentInfoTitle}> ÁLBUM </Typography>
                        <Typography component="h1" className={classes.headerContentInfoName}> {album.name} </Typography>
                        <div className={classes.headerContentInfoDescriptionContent}>
                            <Avatar className={classes.headerContentInfoDescriptionAvatar} alt="Remy Sharp" src="https://www.w3schools.com/w3images/avatar3.png" />
                            <Typography component="span" className={classes.headerContentInfoDescription}> {album.artist} * {album.soundtracks.length} musicas, 1h 47min </Typography>
                        </div>
                    </div>
                </div>
                
                <div className={classes.soundtrackContainer}>
                    
                    <div className={classes.soundtrackHeader}>
                        <Avatar className={classes.soundtrackHeaderAvatar}>
                            <PlayArrowIcon className={classes.soundtrackHeaderAvatarIcon} />
                        </Avatar>
                        <FavoriteBorderIcon className={classes.soundtrackHeaderIcon} />
                        <MoreHorizIcon className={classes.soundtrackHeaderIcon} />
                    </div>
                    
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            
                            <div className={classes.soundtrackContentSubHeader}>
                                <ListSubheader className={classes.soundtrackSubHeader} component="div" id="nested-list-subheader">
                                    <ListItemAvatar>
                                        <span>
                                            #
                                        </span>
                                    </ListItemAvatar>
                                    <ListItemText primary="TÍTULO" />
                                </ListSubheader>
                                <Divider />
                            </div>

                        }
                    >
                        {album.soundtracks.map((soundtrack, index) => {
                            return (
                                <SoundtrackList 
                                    onClick={
                                     () => {
                                      dispatch({
                                        type: "START_PLAYER_SAGA", 
                                        payload: {
                                          albumImage: `/albumSmall/${soundtrack.album_id}.jpg`,
                                          soundtrackName: soundtrack.name,
                                          soundtrackTime: soundtrack.minutes,
                                          artistName: album.artist,
                                          isPlayingSoundtrack: true
                                        }
                                      })
                                     }
                                    }
                                    key={index}
                                    primary={soundtrack.name}
                                    secondary={album.artist}
                                    soundtrackTime={soundtrack.minutes}
                                >
                                    <Avatar className={classes.soundtrackListAvatar}>
                                        {index+1}
                                    </Avatar>
                                </SoundtrackList>        
                            )
                        })}   
                    </List>
                </div>
            </main>
        </Layout>
    )
};

export default AlbumDetailPage;

export const getServerSideProps: GetServerSideProps<AlbumDetailPageProps, {id: string}> = async (context) => {
    context.res.setHeader('Cache-Control', 'public, s-maxage=40, stale-while-revalidate=59');
    const { id } = context.params! //Assertion null
    const { data: album } = await http.get(`albums/${id}`);
    const { data: soundtracks } = await http.get(`albums/${id}/soundtracks`);
    album.soundtracks = soundtracks
    return {
      props: {
        album
      }
    };
};
