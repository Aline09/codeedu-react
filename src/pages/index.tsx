import { NextPage } from "next";
import { 
   createStyles,
   Theme, 
   makeStyles,
   Grid,
   Typography,
   Avatar,
   Chip,
   Link,
   Card,
   CardMedia,
   CardHeader
} from '@material-ui/core';
import Layout from "../components/layout";
import Search from "../components/search";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../store/reducers";
import SoundtrackList from "../components/soundtrackList";
import ShowcaseCard from "../components/showcaseCard";
import { Album } from '../../models/types';
 
const drawerWidth = 290;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      [theme.breakpoints.down('md')]: {
        width: `calc(100% - 75px)`,
        marginLeft: "75px",
      },
    },
    drawer: {
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
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
    bestResultTitle:{
      color: theme.palette.text.secondary,
      fontSize: "24px",
      fontWeight: 700,
      marginBottom: "16px"
    },
    bestResultCard:{
      padding: "20px",
      display: "flex",
      gap: "20px",
      flexDirection: "column",
      backgroundColor: theme.palette.background.default,
      boxShadow: "none",
      transition: "background-color .3s ease",
      "&:hover":{
        backgroundColor: theme.palette.action.hover
      }
    },
    bestResultCardDescription:{
      marginTop: "4px"
    },
    bestResultCardTitle:{
      padding: "0",
      "& span": {
        fontSize: "32px",
        fontWeight: 700,
        letterSpacing: "-.04em",
        lineHeight: "36px"
      }
    },
    bestResultCardImage:{
      height: '92px',
      width: '92px',
      borderRadius: '100px'
    },
    bestResultCardLink:{
      color: theme.palette.text.primary,
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "16px"
    },
    bestResultCardLabel: {
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '.1em',
      lineHeight: '16px',
      textTransform: 'uppercase',
      marginLeft: "10px",
      backgroundColor: 'rgba(0,0,0,.2)',
      borderRadius: '500px',
      color: theme.palette.primary.contrastText,
      padding: '4px 12px'
    },
    bestSoundtracksTitle:{
      color: theme.palette.text.secondary,
      fontSize: "24px",
      fontWeight: 700,
      marginBottom: "16px"
    },
    albumsListTitle:{
      color: theme.palette.text.secondary,
      fontSize: "24px",
      fontWeight: 700,
      marginBottom: "16px",
      marginTop: "16px"
    },
    albumsListGrid:{
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      gridGap: theme.spacing(3),
      width: "100%",
      [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: 'repeat(5, 1fr)',
      },
      [theme.breakpoints.down('md')]: { //1279px
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      [theme.breakpoints.down('xs')]: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
    },
  }));
const SearchPage: NextPage<any> = () => {
  const dispatch =  useDispatch();
  const classes = useStyles();
  const searchTerm = useSelector(({searchReducer: { searchTerm }} : Store) => searchTerm);
  const albums = useSelector(({albumsReducer} : Store) => albumsReducer.albums)
  const soundtracks = useSelector(({soundtracksReducer} : Store) => soundtracksReducer.soundtracks)
  const albumsPage = 1;
  const handlePageChange = (albumsPage : number) => {
    return albumsPage + 1
  }
  return (
    <Layout
      header={(
       <Search/>
      )}
      handleScroll={(e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) { 
          dispatch({
            type: "GET_SEARCH_RESULTS_SAGA", 
            payload: {
              page: handlePageChange(albumsPage)
            }
          })
        }
      }}
    >
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container direction="row" spacing={4}>
          <Grid container item lg={5}>
            <Grid container direction="column">
              <Typography className={classes.bestResultTitle} variant="h2">Melhor Resultado</Typography>
              {
                albums.slice(0,1).map((album: Album, index: number) => {
                  return (
                    <Card key={index} className={classes.bestResultCard}>
                      <CardMedia
                        className={classes.bestResultCardImage}
                        image="/artists/michael.jpg"
                        title={`${album.artist}`}
                    />
                    <Grid container direction="column" className={classes.bestResultCardDescription}>
                      <Grid item>
                        <CardHeader title={album.name} className={classes.bestResultCardTitle}/>
                      </Grid>
                      <Grid item>
                        <Link href="#" className={classes.bestResultCardLink}>
                          {album.artist}
                        </Link>
                      <Chip label="Album" className={classes.bestResultCardLabel}/>
                     </Grid>
                    </Grid>
                  </Card>
                  )
                })
              }
              
            </Grid>
          </Grid>
          <Grid container item lg={7}>
            <Grid container direction="column">
              <Typography className={classes.bestSoundtracksTitle} variant="h2">Músicas</Typography>
              {
                soundtracks.slice(0,4).map((soundtrack) => {
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
                            artistName: soundtrack.artist,
                            isPlayingSoundtrack: true
                          }
                        })
                       }
                      }
                      primary={soundtrack.name} 
                      secondary={soundtrack.artist} 
                      soundtrackTime={soundtrack.minutes} 
                      key={soundtrack.id}>
                      <Avatar variant="square" alt={`${soundtrack.artist}`} src="/artists/michael.jpg" />
                    </SoundtrackList>)
                })
              }
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Typography className={classes.albumsListTitle} variant="h2">Álbums</Typography>
          <Grid className={classes.albumsListGrid}>
            {
              albums.map((album: Album, index: number) => {
                return <ShowcaseCard 
                          key={index} 
                          variant="rounded" 
                          title={album.name} 
                          description={album.artist} 
                          src={`/albumMedium/${album.id}.jpg`}
                          link={`/albums/${album.id}`}
                        /> 
              })
            }
          </Grid>
        </Grid>
      </main>
    </Layout>
  );
};

export default SearchPage;
