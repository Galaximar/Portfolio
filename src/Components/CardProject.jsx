import { Chip, Stack } from '@mui/material';
import { useRef } from 'react';
import ModalTecnologies from './ModalTecnologies'
import style from './CardProject.module.scss'
import ButtonTecnologies from './ButtonTecnologies';


export default function CardProject({title,date,image,description,role,tecnologies,deploy,video}) {
  const readTecnologies=()=>{
    const arrayTecnologies=[];
    for (const option in tecnologies) {
      let tecs=tecnologies[option].map((t,i)=>
        <p key={i}>{t}</p>
      )
      let classOption="tecnos"+option
      arrayTecnologies.push(<div className={style[classOption]} key={tecnologies[option]}><span className={style.info}><span>{option}</span></span>{tecs}</div>)
    }
    return arrayTecnologies
  }
  return (
      <div>
        <div className={style.box}>
        <span></span>
          <div className={style.content}>
            <div className={style.text}>
              <h2>{title}</h2>
              <p>{date}</p>
              <img src={image} alt="Project image" />
              <p><b>Role</b>: {role}</p>
              <div className={style.description}>{description}</div>
              <div className={style.containerBtn}>
              <ModalTecnologies data={readTecnologies()}/>
              {deploy&&<ButtonTecnologies text="Deploy" link={deploy}/>}
              {video&&<ButtonTecnologies text="Video" link={video}/>}
              </div>   
            </div>
          </div>      
        </div>
      </div>
  );
}
