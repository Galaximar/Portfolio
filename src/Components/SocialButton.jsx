import style from './SocialButton.module.scss'

export default function ScrollTo({text,img,link}) {
  return (
		<>
        <button className={`${style.button} ${text==="Linkedin"?style.blue:style.black}`}>
          <div className={style.icon}>
              <img src={img} alt={link} />
          </div>
          <p>{text}</p>
        </button>
		</>
  );
}
