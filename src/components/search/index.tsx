import React, { FC, ReactNode, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Grid, InputBase } from '@material-ui/core';
import SearchIcon from '../icons/search/search';
import { Store } from "../../store/reducers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: '#fff',
      borderRadius: '500px',
      maxWidth: "364px"
    },
    searchIcon: {
      fill: "#000",
    },
    searchInput: {
      border: "none",
      width: "90%",
      fontSize: "14px",
      fontWeight: 400,
      color: "#000",
      margin: "6px 0"
    },
    searchInputIcon:{
     margin: "0 10px",
    },
    searchInputField: {
      width: "calc(100% - 44px)"
    }
  }));

const Search:FC = () => {
    const classes = useStyles();
    const router = useRouter();
    const dispatch = useDispatch();
    const searchTerm = useSelector(({searchReducer: { searchTerm }} : Store) => searchTerm);
    
    const setRoute = useCallback((e) => {
      router.push({
        pathname: '/',
        query: {search: e.target.value},
      })
      dispatch({
          type: "SET_SEARCH_TERM_SAGA",
          payload: e.target.value
      })
    }, []);
    
    return (  
      <div className={classes.root}>
          <Grid container alignItems="center">
            <Grid item className={classes.searchInputIcon}>
                <SearchIcon className={classes.searchIcon}/>
            </Grid>
            <Grid item className={classes.searchInputField}>
                <InputBase 
                  id="input-with-icon-grid" 
                  placeholder="Artistas, músicas ou podcasts" 
                  margin="none" 
                  className={classes.searchInput}
                  onChange={setRoute}
                  value={searchTerm}
                />
            </Grid>
         </Grid>   
       </div>
    )
}

export default Search