import style from './Form.module.scss'
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import {withWidth,Hidden} from "@material-ui/core"
export default withWidth() (function Form({width}) {
    const [data,setData] = useState({});
    const [error,setError] = useState({})
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
        if(error.submit) console.log("enviando")
        else {
            let mail=!data.mail?"*Required":error.mail;
            let motive=!data.motive?"*Required":error.motive;
            let description=!data.description?"*Required":error.description
            setError({...error,mail,motive,description})
        }
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
        helperText={error.motive}
        multiline
        fullWidth
      />
    <div className={`${!(width==="sm"||width==="xs")&&style.button}`}>
    <Button fullWidth variant="contained" onClick={submit} color={`${error.submit?"success":"error"}`}>Submit</Button>
    </div>
    </Box>
  );
})

