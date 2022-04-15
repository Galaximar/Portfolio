import style from './Menu.module.scss'
import { IconButton, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DownloadIcon from '@mui/icons-material/Download';
import InventoryIcon from '@mui/icons-material/Inventory';
import IconMenu from "./IconMenu";
import Box from '@mui/material/Box';
import {withWidth,Hidden} from "@material-ui/core"

export default withWidth()(function Menu({refs,width}) {
  return (
    <>
    <Hidden xsDown>
      <div className={style.container}>
        <div className={style.optionsFather}>
          <div className={style.options}>
            <IconMenu optionRef={refs[0]} name="About me" icon={<AccountCircleIcon fontSize="large"/>} />
            <IconMenu optionRef={refs[1]} name="Projects" icon={<InventoryIcon fontSize="large"/>} />
            <IconMenu name="Curriculum - PDF" icon={<DownloadIcon fontSize="large"/>} />
            <IconMenu optionRef={refs[2]} name="Contact me" icon={<CallIcon fontSize="large"/>} />
          </div>
        </div>
      </div>
    </Hidden>
    <Hidden smUp>
    <Box sx={{ position: 'fixed', bottom:"8px",left: 5, zIndex:10000}}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={<SpeedDialIcon />}
        FabProps={{
          sx: {
            bgcolor: '#f5f5f5',
            '&:hover': {
              bgcolor: '#f5f5f5',
            },
            color:'rgba(0, 0, 0, 0.87)'
          }
        }}
      >
        {[
          {name:"Contact me",icon:<CallIcon fontSize="large"/>,ref:refs[2]},
          {name:"Curriculum - PDF",icon:<DownloadIcon fontSize="large"/>},
          {name:"Projects",icon:<InventoryIcon fontSize="large"/>,ref:refs[1]},
          {name:"About me",icon:<AccountCircleIcon fontSize="large"/>,ref:refs[0]}
        ].map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            onClick={()=>action.ref?.scrollIntoView({ behavior: 'smooth' })}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
    </Hidden>
    </>
		
  );
})