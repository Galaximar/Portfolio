import { Fab } from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';
import {Hidden} from "@material-ui/core"

export default function ScrollTo() {
  return (
		<>
        <Hidden smDown>
        <Fab onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} variant="extended" sx={{ position:"fixed",bottom:5,right:5}}>
          <NavigationIcon sx={{mr: 1}}/>
          Navigate
        </Fab>
        </Hidden>
        <Hidden mdUp>
          <Fab onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} variant="extended" sx={{borderRadius:"50%", position:"fixed",bottom:"8px",height:"56px",right:5}}>
            <NavigationIcon />
          </Fab>
        </Hidden>
        
		</>
  );
}
