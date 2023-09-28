import style from "../../css/Loader.module.css"

const Loader = () => {
  return (
    <div className={`${style.typingIndicator} mx-auto`}>
      <div className={style.typingCircle}></div>
      <div className={style.typingCircle}></div>
      <div className={style.typingCircle}></div>
      <div className={style.typingShadow}></div>
      <div className={style.typingShadow}></div>
      <div className={style.typingShadow}></div>
    </div>
  );
};

export default Loader;
