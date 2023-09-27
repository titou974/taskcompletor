import style from "../../css/Loader.module.css"

const Loader = () => {
  return (
    <div class={`${style.typingIndicator} mx-auto`}>
      <div class={style.typingCircle}></div>
      <div class={style.typingCircle}></div>
      <div class={style.typingCircle}></div>
      <div class={style.typingShadow}></div>
      <div class={style.typingShadow}></div>
      <div class={style.typingShadow}></div>
    </div>
  );
};

export default Loader;
