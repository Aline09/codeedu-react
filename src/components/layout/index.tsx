import React, { FC, ReactNode } from "react";
import { Container } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Menu from "./menu";
import Header from "./header";
import Player from "./menuPlayer";

type Props = {
    children: ReactNode,
    header?: ReactNode,
    handleScroll?: (e : any) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layoutRoot: {
      display: 'flex',
      backgroundColor: 'green',
      height: '100vh',
      overflowY: "scroll"
    },
  }));

const Layout:FC<Props> = ({children, header, handleScroll}) => {
    const classes = useStyles();
    
    return (
      <div className={classes.layoutRoot} onScroll={handleScroll || undefined}>
          <Header>
            {header}
          </Header>
         {children}
         <Menu/>
         <Player/>
       </div>
    )
}

export default Layout