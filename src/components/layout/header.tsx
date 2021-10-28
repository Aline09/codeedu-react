import * as React from 'react';
import { 
  FormLabel, 
  FormControl, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  createStyles, 
  Theme, 
  makeStyles, 
  AppBar, 
  Toolbar, 
  Menu, 
  MenuItem, 
  Button, 
  Avatar, 
  withStyles, 
  ListItemText, 
  ListItemIcon, 
 } from '@material-ui/core'
import {
  ToggleButtonGroup,
  ToggleButton
} from '@material-ui/lab'
import { 
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon, 
} from '@material-ui/icons'
import { ThemeContext } from '../../theme/context'
type Props = {
  children: React.ReactNode
}
const drawerWidth = 290;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "transparent",
      boxShadow: "none",
      [theme.breakpoints.down('md')]: {
        width: "calc(100% - 75px)",
        marginLeft: "75px"
      },
    },
    drawer: {
      flexShrink: 0,
    },
    icon: {
      fill: theme.palette.text.primary
    },
    drawerPaper: {
      width: drawerWidth,
      overflowY: "hidden"
    },
    // necessary for content to be below app bar
    toolbar: {
      minHeight: "60px",
      padding: "24px 24px",
      [theme.breakpoints.down('xs')]: { //1279px
        justifyContent: "space-between"
      },
    },
    content: {
      flexGrow: 1,
      paddingLeft: 20,
      paddingRight: 20,
      [theme.breakpoints.down('xs')]: { //1279px
        position: "absolute",
        top: "80px",
        right: "0px",
        width: "100%"
      },
    },
    buttonMenu: {
      marginLeft: 20,
      borderRadius: 20,
      paddingLeft: 7,
      paddingRight: 7,
      paddingTop: 2,
      paddingBottom: 2,
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: "normal",
      [theme.breakpoints.down('xs')]: {
        fontSize: '0',
      },
    },
    buttonMenuAvatar: {
      height: 28,
      width: 28,
      [theme.breakpoints.down('xs')]: {
        marginRight: '0'
      },
    },
    buttonMenuIcon: {
      fontSize: '28px !important',
      [theme.breakpoints.down('xs')]: {
        marginLeft: '0',
      },
    },
    iconNavigation: {
      height: 32,
      width: 32,
      color: theme.palette.getContrastText(theme.palette.primary.main),
      backgroundColor: theme.palette.primary.main
    },
    navigation: {
      display: 'flex', 
      width: 75, 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between'
    },
    option: {
      display: 'flex', 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'flex-end'
    },
    formColor:{
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      top: "200px",
      right: "0px",
      background: "#fff",
      boxShadow: theme.shadows[10],
      borderRadius: "25px"
    },
    formColorOptions:{
      "& label":{
        margin: 5
      }
    },
    formColorOptionsBlack:{
      padding: 0,
      color: "#000"
    },
    formColorOptionsYellow:{
      padding: 0,
      color: "#ffd100"
    },
    formColorOptionsPurple:{
      padding: 0,
      color: "#7C238C"
    }
  }),
);

const Header: React.FC<Props> = ({
  children
}) => {
  const { 
    activeTheme,
    setTheme
  } = React.useContext(ThemeContext)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(Number(event.target.value))
  };


  
  return (
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          
          <div className={classes.navigation}>
            <Avatar className={classes.iconNavigation}>
              <ChevronLeftIcon />
            </Avatar>
            <Avatar className={classes.iconNavigation}>
              <ChevronRightIcon />
            </Avatar>  
          </div>

          <div className={classes.content}>
            {children}
          </div>

          <div className={classes.option}>
            <FormControl component="fieldset" className={classes.formColor}>
              <RadioGroup className={classes.formColorOptions} value={activeTheme} onChange={handleChange}>
                <FormControlLabel value={0} control={<Radio color="primary" className={classes.formColorOptionsBlack} />} label="" />
                <FormControlLabel value={1} control={<Radio color="primary" className={classes.formColorOptionsYellow} />} label="" />
                <FormControlLabel value={2} control={<Radio color="primary" className={classes.formColorOptionsPurple} />} label="" />
              </RadioGroup>
            </FormControl>
            <Button 
              className={classes.buttonMenu}
              variant="contained" 
              color="primary"
              aria-controls="simple-menu" 
              aria-haspopup="true" 
              onClick={handleClick}
              startIcon={<Avatar className={classes.buttonMenuAvatar} alt="Profile" src="https://www.w3schools.com/w3images/avatar5.png" />}
              endIcon={Boolean(anchorEl) ? <ArrowDropUpIcon className={classes.buttonMenuIcon} /> : <ArrowDropDownIcon className={classes.buttonMenuIcon} />}
            >
              Aline Oliveira
            </Button>
            <Menu
              elevation={0}
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handleClose}
              getContentAnchorEl={null}
            >
              <MenuItem onClick={handleClose}>
                <ListItemText primary="Conta" />
                <ListItemIcon style={{ justifyContent: 'flex-end' }}>
                  <ArrowDropUpIcon color="error" />
                </ListItemIcon>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemText primary="Perfil" />
                <ListItemIcon style={{ justifyContent: 'flex-end' }}>
                  <ArrowDropUpIcon color="error" />
                </ListItemIcon>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemText primary="Faça upgrade para o premium" />
                <ListItemIcon style={{ justifyContent: 'flex-end' }}>
                  <ArrowDropUpIcon color="error" />
                </ListItemIcon>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemText primary="Sair" />
                <ListItemIcon style={{ justifyContent: 'flex-end' }}>
                  <ArrowDropUpIcon color="error" />
                </ListItemIcon>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
  );
}
export default Header
