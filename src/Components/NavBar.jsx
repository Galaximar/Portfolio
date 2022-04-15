import {AppBar,Toolbar,Typography} from '@mui/material'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@mui/material';
import {Button,makeStyles} from '@material-ui/core'


const useStyles=makeStyles(theme=>({
  offset:theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor:"red"
  },
  title: {
    flexGrow : 1,
  }
}))


export default function NavBar() {
  const styles= useStyles();
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton 
          color="inherit" 
          aria-label="menu"
          >
          <MenuIcon className={styles.menuButton} />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
             adadsa
          </Typography>
          <Button variant="text" color="default">
            looo
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
