import style from './ButtonTecnologies.module.scss'

export default function ButtonTecnologies({text,link}) {

  const redirect=()=>{
    if(link) window.open(link);
  }
  
  return (
    <button onClick={redirect} className={style.content}>{text}</button>
  );
}
