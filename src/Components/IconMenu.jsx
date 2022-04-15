import { Button, IconButton, Popover, SpeedDial, SpeedDialAction, Typography} from '@mui/material';
import React from 'react'
import style from './IconMenu.module.scss'
export default function IconMenu({icon,name,optionRef}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={style.iconContainer}>
      <IconButton 
          color="inherit" 
          aria-label="menu"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          onClick={()=>optionRef.scrollIntoView({ behavior: 'smooth' })}
          >
          {icon}
      </IconButton>

          <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>{name}</Typography>
        </Popover>
    </div>
  );
}
