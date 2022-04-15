import { Fab } from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';

export default function ScrollTo() {
  return (
		<>
        <Fab onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} variant="extended" sx={{ position:"fixed",bottom:5,right:5}}>
          <NavigationIcon sx={{mr: 1}}/>
          Navigate
        </Fab>
		</>
  );
}
