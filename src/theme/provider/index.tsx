import React, { ReactNode, FC, useContext } from "react";
import { Theme, ThemeProvider } from "@material-ui/core";
import { ThemeContext } from "../context";
import CssBaseline from '@material-ui/core/CssBaseline';

type Props = {
  children: ReactNode;
};

const Provider: FC<Props> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <CssBaseline/>  
      <ThemeProvider theme={theme as Theme}>
        {children}
      </ThemeProvider>
    </>
  );
};

export default Provider;
