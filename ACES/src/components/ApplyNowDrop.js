import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ApplyNowDrop.module.css";

const ApplyNowDrop = () => {
  const navigate = useNavigate();

  const onRegistrationFormTextClick = useCallback(() => {
    window.open(
      "http://www.aceslearningcenter.com/aces-2021-fall-enrichment-course-enrollment-form/"
    );
  }, []);

  const onPoliciesTextClick = useCallback(() => {
    navigate("/policies");
  }, [navigate]);

  return (
    <div className={styles.applyNowDrop}>
      <div className={styles.applyNowDropChild} />
      <img className={styles.applyNowDropItem} alt="" src="/polygon-6@2x.png" />
      <b className={styles.applyNow}>Apply Now!</b>
      <b className={styles.fallSchedule}>2023 Fall Schedule</b>
      <b
        className={styles.registrationForm}
        onClick={onRegistrationFormTextClick}
      >
        Registration Form
      </b>
      <b className={styles.policies} onClick={onPoliciesTextClick}>
        Policies
      </b>
    </div>
  );
};

export default ApplyNowDrop;
