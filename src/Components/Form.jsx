import style from './Form.module.scss'
import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import {withWidth,Hidden} from "@material-ui/core"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingButton } from '@mui/lab';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

export default withWidth() (function Form({width}) {
    const [data,setData] = useState({});
    const [error,setError] = useState({});
    const [loading,setLoading] = useState(false);
    const form = useRef();
    const isEmail=(email)=>/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email);
    const handleChange=({target})=>{
    setData({...data,[target.name]:target.value})
    if(target.name==="mail"&&!isEmail(target.value))
        setError({...error,[target.name]:"This email is not valid"})
    else setError({...error,[target.name]:false})
    } 
    const validate =()=>{
        setError({...error,submit:(data.mail&&data.motive&&data.description&&error.mail===false)})
    }
    const submit=()=>{
        const config = {
          position: "top-right",
          autoClose: 3500,
          closeOnClick: true,
          draggable: true,
          theme: "dark",
          toastId: "Toast actual"
        }
        if(error.submit) {
          setLoading(true);
          emailjs.sendForm('service_92vvg6m', 'template_jloq14k', form.current, 'Xu-sJyaRgresSfQjl')
          .then((result) => {
              toast.success("Email sent, thanks for contacting me.",config);
              form.current.reset();
              setLoading(false);
              setError({});
              setData({});
          }, (error) => {
              toast.error(error.text,config);
              toast.update("Toast actual", {
                render: error.text,
                type: toast.TYPE.ERROR,
                autoClose: 3500
              });
              setError({});
              setLoading(false);
              console.log(error.text);
          });
        }
        else {
            let mail=!data.mail?"*Required":error.mail;
            let motive=!data.motive?"*Required":error.motive;
            let description=!data.description?"*Required":error.description;
            toast.info(`${mail?("Mail"+mail+", "):""}${motive?("Motive"+motive+", "):""}${description?("Description"+description+"."):""}`,config);
            toast.update("Toast actual", {
              render: `${mail?("Mail "+mail+" "):""}${motive?("Motive "+motive+" "):""}${description?("Description "+description+"."):""}`,
              autoClose: 3500,
              type: toast.TYPE.INFO,
            });
            setError({...error,mail,motive,description});
        }
        toast.configure();
    }
    useEffect(()=>{
         validate();
    },[data])
  return (
    <Box
      component="form"
      sx={{ mt: 1}}
      noValidate
      autoComplete="off"
      onChange={handleChange}
      ref={form}
    >
      <div className={`${!(width==="sm"||width==="xs")&&style.mail}`}>
        <div>
            <p>Your mail</p>
            <TextField
            error={Boolean(error.mail)}
            name="mail"
            id="outlined-error"
            label="Mail"
            placeholder='NewtonF@mail.com...'
            helperText={error.mail}
            multiline
            fullWidth
            />
        </div>
        <div>
            <p>Motive</p>
            <TextField
            error={Boolean(error.motive)}
            name="motive"
            id="outlined-error-helper-text"
            label="Motive"
            placeholder='Vacant Fullstack...'
            helperText={error.motive}
            multiline
            fullWidth
            />
        </div>
      </div>
      <p>Description</p>
      <TextField
        error={Boolean(error.description)}
        name="description"
        id="outlined-adornment-amount"
        label="Description"
        placeholder='Hi Marcelo...'
        helperText={error.description}
        multiline
        fullWidth
      />
    <div className={`${!(width==="sm"||width==="xs")?style.button:style.cel}`}>
    <LoadingButton
      loading={loading}
      loadingPosition="start"
      fullWidth 
      className={`${style.content} ${width==="md"||width==="lg"||width==="xl"?style.upMd:width!=="xs"?style.upXs:style.downXs}`}
      sx={{height:"50px",boxShadow:"none",borderRight: "6px solid #00e6f6",mt:"10px",background: `${error.submit?"linear-gradient(45deg, transparent 5%, #4caf50 5%)":"linear-gradient(45deg, transparent 5%, #ff013c 5%)"}`,'&:hover': {
        boxShadow:"none",background: `${error.submit?"linear-gradient(45deg, transparent 5%, #2e7d32 5%)":"linear-gradient(45deg, transparent 5%, #ff013c 5%)"}`,
      }}}
      onClick={submit}
      startIcon={<ForwardToInboxIcon />}
      variant='contained'
      color={`${error.submit?"success":"error"}`}
    >
       {`${loading?"Sending":"Submit"}`}
    </LoadingButton>
    </div>
    </Box>
  );
})

