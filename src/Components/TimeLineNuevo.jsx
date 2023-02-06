import style from "./TimeLine.module.scss";

const Point = () => <div className={style.point} />;
const Divider = () => <div className={style.divider} />;

const TimeLine = ({ items = [] }) => {
  return (
    <div className={style.container}>
      <h3>My experience is</h3>
      <ul className={style.timeLine}>
        {items.map((item, i) => (
          <li className={style.item}>
            <div className={style.separator}>
              <Point />
              {i !== items.length - 1 && <Divider />}
            </div>
            <div className={style.content}>
              <p>{item}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TimeLine;
