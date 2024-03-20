import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProgramsDrop.module.css";

const ProgramsDrop = () => {
  const navigate = useNavigate();

  const onOverviewTextClick = useCallback(() => {
    navigate("/overview");
  }, [navigate]);

  const onEnglishTextClick = useCallback(() => {
    navigate("/english");
  }, [navigate]);

  const onMathematicsTextClick = useCallback(() => {
    navigate("/mathematics");
  }, [navigate]);

  const onScienceUSAPHOTextClick = useCallback(() => {
    navigate("/scienceusapho");
  }, [navigate]);

  const onProgrammingUSACOTextClick = useCallback(() => {
    navigate("/programmingusaco");
  }, [navigate]);

  const onTestPrepTutoringTextClick = useCallback(() => {
    navigate("/test-prepusapho");
  }, [navigate]);

  return (
    <div className={styles.programsDrop}>
      <b className={styles.programs}>Programs</b>
      <div className={styles.programsDropChild} />
      <img className={styles.programsDropItem} alt="" src="/polygon-3@2x.png" />
      <b className={styles.overview} onClick={onOverviewTextClick}>
        Overview
      </b>
      <b className={styles.english} onClick={onEnglishTextClick}>
        English
      </b>
      <b className={styles.mathematics} onClick={onMathematicsTextClick}>
        Mathematics
      </b>
      <b className={styles.scienceusapho} onClick={onScienceUSAPHOTextClick}>
        <p className={styles.scienceusapho1}>Science/USAPHO</p>
      </b>
      <b
        className={styles.programmingusaco}
        onClick={onProgrammingUSACOTextClick}
      >
        Programming/USACO
      </b>
      <b
        className={styles.testPreptutoring}
        onClick={onTestPrepTutoringTextClick}
      >
        Test Prep/Tutoring
      </b>
    </div>
  );
};

export default ProgramsDrop;
