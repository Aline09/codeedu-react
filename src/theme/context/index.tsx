import {
  Theme,
  createTheme,
  ThemeOptions
} from "@material-ui/core";
import React, {
  ReactNode,
  FC,
  createContext,
  useReducer,
  Dispatch,
  Reducer,
  useEffect
} from "react";

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    likedSongsButton: {
      background: string,
      color: string,
      borderRadius: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    likedSongsButton?: {
      background?: string,
      color?: string,
      borderRadius: string
    }
  }
}


type Props = {
  children: ReactNode;
};

type Action = {
  type: string
  payload: any
};

type ThemeProvider = {
  activeTheme: number | undefined
  theme: Theme | undefined
  setTheme: (index: number) => void
};

type State = {
  activeTheme: number | undefined
  theme: Theme | undefined
}

type Types = {
  SET_THEME: string;
};

const blackTheme = {
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: "#000000",
      contrastText: "#fff"
    },
    background:{
      paper: "#000000",
      default: "#181818"
    },
    info:{
      main: "#1db954"
    },
    action:{
      hover: "#282828"
    },
    text: {
      primary: "#b3b3b3",
      secondary: "#fff"
    },
    divider: "#282828"
  },
  likedSongsButton: {
    color: "#fff",
    background: "linear-gradient(135deg,#450af5,#c4efd9)",
    borderRadius: "1px"
  }
};

const yellowTheme = {
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: "#ffd100",
      contrastText: "#202020"
    },
    info:{
      main: "#ED9390"
    },
    background:{
      paper: "#ffd100",
      default: "#ffee32"
    },
    action:{
      hover: "#f5e000"
    },
    text: {
      primary: "#202020",
      secondary: "#333533"
    },
    divider: "#282828"
  },
  likedSongsButton: {
    color: "#fff",
    background: " linear-gradient(90deg, hsla(2, 72%, 75%, 1) 0%, hsla(324, 57%, 77%, 1) 50%, hsla(278, 54%, 81%, 1) 100%)",
    borderRadius: "1px"
  }
};

const purpleTheme = {
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: "#7C238C",
      contrastText: "#fff"
    },
    background:{
      paper: "#854798",
      default: "#854798"
    },
    info:{
      main: "#FF6663"
    },
    action:{
      hover: "#7C72A0"
    },
    text: {
      primary: "#FDE8E9",
      secondary: "#D8E1E9"
    },
    divider: "#282828"
  },
  likedSongsButton: {
    color: "#fff",
    background: "linear-gradient(135deg,#450af5,#c4efd9)",
    borderRadius: "1px"
  }
};

const appThemes = [
  blackTheme,
  yellowTheme,
  purpleTheme
]

const types: Types = {
  SET_THEME: "theme@setTheme",
};

const initialState: State = {
  activeTheme: 0,
  theme: createTheme(appThemes[0])
}

export const ThemeContext = createContext<ThemeProvider>({
  ...initialState,
  setTheme: () => undefined
});

function themeReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case types.SET_THEME:
      return {
        ...state, 
        activeTheme: action.payload,
        theme: createTheme(appThemes[action.payload])
      };
  }
}

const Context: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<State | undefined, Action>>(themeReducer, initialState);
  const setTheme = (index: number) => {
    dispatch({ type: types.SET_THEME, payload: index }) 
    localStorage.setItem('activeTheme', String(index))
  }
  const value = React.useMemo(() => ({
   
  }), [state, setTheme])
  useEffect(() => {
    const index = localStorage.getItem('activeTheme')
    setTheme(Number(index))
  }, [dispatch])
  return (
    <ThemeContext.Provider
      value={{
        activeTheme: state?.activeTheme,
        theme:  state?.theme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default Context;
