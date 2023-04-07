import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import style from "./TimeLine.module.scss";

const Point = () => <FiberManualRecordOutlinedIcon sx={{ color: "black" }} />;
const Divider = () => <div className={style.divider} />;

const TimeLine = ({ items = [], t }) => {
  return (
    <div className={style.container}>
      <h3>{t("mi_experiencia")}</h3>
      <ul className={style.timeLine}>
        {items.map((item, i) => (
          <li key={i} className={style.item}>
            <div className={style.separator}>
              <Point />
              {i !== items.length - 1 && <Divider />}
            </div>
            <div className={style.content}>
              <div>{item}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TimeLine;
