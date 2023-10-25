import style from "./page.module.css";
export default function loading() {
  return (
    <main className={style.mainLoading}>
      <h2 className={style.h2}>Loading...</h2>
    </main>
  );
}
