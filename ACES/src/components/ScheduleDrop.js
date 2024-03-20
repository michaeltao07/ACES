import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ScheduleDrop.module.css";

const ScheduleDrop = () => {
  const navigate = useNavigate();

  const onFallTextClick = useCallback(() => {
    navigate("/fall-schedule");
  }, [navigate]);

  return (
    <div className={styles.scheduleDrop}>
      <img
        className={styles.scheduleDropChild}
        alt=""
        src="/polygon-3@2x.png"
      />
      <b className={styles.schedule}>Schedule</b>
      <div className={styles.scheduleDropItem} />
      <b className={styles.fall} onClick={onFallTextClick}>
        <p className={styles.blankLine}>Fall</p>
      </b>
      <b className={styles.spring}>
        <p className={styles.blankLine}>Spring</p>
      </b>
      <b className={styles.summer}>
        <p className={styles.blankLine}> Summer</p>
        <p className={styles.blankLine}>&nbsp;</p>
      </b>
    </div>
  );
};

export default ScheduleDrop;
