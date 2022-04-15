import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './ModalTecnologies.module.scss'
import ButtonTecnologies from './ButtonTecnologies'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#424242',
  borderRadius:10,
  boxShadow: 24,
  border:"none",
  p: 4,
};

export default function ModalTecnologies({data}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div onClick={handleOpen}>
        <ButtonTecnologies text="Tecnologies"/>
      </div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <span onClick={handleClose} className={styles.closeButton}>
            <ButtonTecnologies text="X"/>
          </span> 
            <Typography sx={{display:"inline-block",ml:3}} id="modal-modal-title" variant="h6" component="h2">
              Tecnologies
            </Typography>
          {data}
        </Box>
      </Modal>
    </>
  );
}
