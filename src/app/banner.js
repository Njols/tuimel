import styles from "./banner.module.css";
function Banner() {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["banner-container"]}>
        <div className={styles.nav}>
          <a href="#">Over</a>
          <a href="#">Vrienden</a>
          <a href="#">Contact</a>
        </div>
        <div className={styles["logo"]}></div>
      </div>
      <div className={styles["cook"]}>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
    </div>
  );
}

export default Banner;
