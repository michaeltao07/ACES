import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AbUsDrop.module.css";

const AbUsDrop = () => {
  const navigate = useNavigate();

  const onInternshipsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className={styles.abUsDrop}>
      <b className={styles.aboutUs}>About Us</b>
      <img className={styles.abUsDropChild} alt="" src="/polygon-3@2x.png" />
      <div className={styles.abUsDropItem} />
      <div className={styles.abUsDropInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.abUsDropChild1} />
      <div className={styles.abUsDropChild2} />
      <div className={styles.abUsDropChild3} />
      <b className={styles.teacherProfiles}>Teacher Profiles</b>
      <b className={styles.whoWeAre}>Who We Are</b>
      <b className={styles.whyUs}>Why Us?</b>
      <b className={styles.employment}>Employment</b>
      <b className={styles.internships} onClick={onInternshipsTextClick}>
        <p className={styles.internships1}>Internships</p>
      </b>
    </div>
  );
};

export default AbUsDrop;
