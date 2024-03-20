import { useState, useCallback } from "react";
import ApplyNowDrop from "../components/ApplyNowDrop";
import PortalPopup from "../components/PortalPopup";
import AbUsDrop from "../components/AbUsDrop";
import ScheduleDrop from "../components/ScheduleDrop";
import ProgramsDrop from "../components/ProgramsDrop";
import { useNavigate } from "react-router-dom";
import styles from "./Policies.module.css";

const Policies = () => {
  const [isApplyNowDropOpen, setApplyNowDropOpen] = useState(false);
  const [isApplyNowDrop1Open, setApplyNowDrop1Open] = useState(false);
  const [isAbUsDropOpen, setAbUsDropOpen] = useState(false);
  const [isScheduleDropOpen, setScheduleDropOpen] = useState(false);
  const [isScheduleDrop1Open, setScheduleDrop1Open] = useState(false);
  const [isProgramsDropOpen, setProgramsDropOpen] = useState(false);
  const [isProgramsDrop1Open, setProgramsDrop1Open] = useState(false);
  const navigate = useNavigate();

  const openApplyNowDrop = useCallback(() => {
    setApplyNowDropOpen(true);
  }, []);

  const closeApplyNowDrop = useCallback(() => {
    setApplyNowDropOpen(false);
  }, []);

  const openApplyNowDrop1 = useCallback(() => {
    setApplyNowDrop1Open(true);
  }, []);

  const closeApplyNowDrop1 = useCallback(() => {
    setApplyNowDrop1Open(false);
  }, []);

  const openAbUsDrop = useCallback(() => {
    setAbUsDropOpen(true);
  }, []);

  const closeAbUsDrop = useCallback(() => {
    setAbUsDropOpen(false);
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const openScheduleDrop = useCallback(() => {
    setScheduleDropOpen(true);
  }, []);

  const closeScheduleDrop = useCallback(() => {
    setScheduleDropOpen(false);
  }, []);

  const openScheduleDrop1 = useCallback(() => {
    setScheduleDrop1Open(true);
  }, []);

  const closeScheduleDrop1 = useCallback(() => {
    setScheduleDrop1Open(false);
  }, []);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openProgramsDrop = useCallback(() => {
    setProgramsDropOpen(true);
  }, []);

  const closeProgramsDrop = useCallback(() => {
    setProgramsDropOpen(false);
  }, []);

  const openProgramsDrop1 = useCallback(() => {
    setProgramsDrop1Open(true);
  }, []);

  const closeProgramsDrop1 = useCallback(() => {
    setProgramsDrop1Open(false);
  }, []);

  const onApplyNowContainerClick = useCallback(() => {
    window.open(
      "http://www.aceslearningcenter.com/aces-2021-fall-enrichment-course-enrollment-form/"
    );
  }, []);

  return (
    <>
      <div className={styles.policies}>
        <div className={styles.background} />
        <div className={styles.contactcopyright}>
          <div className={styles.contactcopyrightChild} />
          <div className={styles.contactcopyrightItem} />
          <img
            className={styles.materialSymbolshouseIcon}
            alt=""
            src="/materialsymbolshouse@2x.png"
          />
          <img
            className={styles.materialSymbolsfaxOutlineIcon}
            alt=""
            src="/materialsymbolsfaxoutline@2x.png"
          />
          <div className={styles.pondSpringsRdContainer}>
            <p className={styles.pondSpringsRd}>13581 Pond Springs Rd #200</p>
            <p className={styles.pondSpringsRd}>Austin, TX 78729</p>
          </div>
          <div className={styles.infoaceslearningcentercom}>
            info@aceslearningcenter.com
          </div>
          <b className={styles.acesAcademicEnrichment}>
            © 2023 ACES Academic Enrichment Center - All Rights Reserved
          </b>
          <div className={styles.div}>(512) 284 - 1181</div>
          <div className={styles.div1}>(512) 918 - 8828</div>
          <img
            className={styles.solarphoneLinearIcon}
            alt=""
            src="/solarphonelinear@2x.png"
          />
          <div className={styles.am5pm}>9AM - 5PM Mon-Fri</div>
          <b className={styles.contactUs}>
            <p className={styles.pondSpringsRd}>Contact Us</p>
          </b>
          <img className={styles.vectorIcon} alt="" src="/vector3@2x.png" />
          <img className={styles.socialsIcon} alt="" src="/socials@2x.png" />
        </div>
        <div className={styles.whyUs}>
          <b className={styles.agreementsAndPoliciesContainer}>
            <p className={styles.pondSpringsRd}>Agreements and Policies</p>
          </b>
          <b className={styles.parentsAgreement}>Parent’s Agreement</b>
          <b
            className={styles.cancelrefund}
          >{`Cancellation of Enrollment & Refund Policy`}</b>
          <div className={styles.iUnderstandThatContainer}>
            <ul className={styles.iUnderstandThatIAmNotTo}>
              <li className={styles.iUnderstandThat}>
                I understand that I am not to leave my child at the ACES
                Academic Enrichment Center site unless there is a ACES Academic
                Enrichment Center staff member present.
              </li>
              <li className={styles.iUnderstandThat}>
                I understand that my child will not be allowed to leave the
                program with an unauthorized person.
              </li>
              <li className={styles.iUnderstandThat}>
                Only adults (18 years and older ) can be authorized to pick up
                the child.
              </li>
              <li className={styles.iUnderstandThat}>
                Authorization: In case of an emergency, I understand that every
                effort will be made to contact me. In the event that I cannot be
                reached, I hereby give permission to the physician selected by
                the adult leader in charge to secure proper medical services. I
                hereby release Austin Chinese Education Services and its staff
                and aides from all action that may arise from such medical
                services.
              </li>
              <li className={styles.iUnderstandThat}>
                I understand and acknowledge that ACES Academic Enrichment
                Center does not offer any medical insurance to protect against
                injuries, makes no claim to do so, and has no responsibility for
                any medical expenses incurred.
              </li>
              <li className={styles.iUnderstandThat}>
                I understand that each participant must assume the risk and any
                related financial responsibility that could result from
                participation in any of these activities. I agree to assume such
                risks and such financial responsibility.
              </li>
              <li>
                I further understand that neither the ACES Academic Enrichment
                Center nor its workers can be held responsible in the event of
                accident.
              </li>
            </ul>
          </div>
          <div className={styles.refundWillBeContainer}>
            <p className={styles.pondSpringsRd}>Refund will be made if</p>
            <ul className={styles.iUnderstandThatIAmNotTo}>
              <li className={styles.iUnderstandThat}>
                The class is cancelled by ACES: Full refund
              </li>
              <li className={styles.iUnderstandThat}>
                14 calendar days or more before the desired class starts:
                Cancellations are accepted with full refund.
              </li>
              <li className={styles.iUnderstandThat}>
                13 (two Tuesdays before) – 5 (Wednesday before the week)
                calendar days before the desired class starts: 50% refund of
                full tuition.
              </li>
              <li>
                On or after the 4 days before the desired class starts: No
                cancellations will be accepted. No credits will be awarded. No
                refunds will be given. You will be held responsible for the full
                amount of camp fees, regardless of whether or not your child
                attends camp. — NO EXCEPTIONS
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.enrollmentTuition}>
          <div className={styles.enrollmentTuitionChild} />
          <div className={styles.enrollmentTuitionItem} />
          <div className={styles.enrollmentTuitionInner} />
          <div className={styles.thereAre2Container}>
            <p className={styles.pondSpringsRd}>
              <span
                className={styles.forEachClass}
              >{`There are 2 deadlines each semester: `}</span>
              <span className={styles.earlyEnrollmentDeadline}>
                Early Enrollment Deadline
              </span>
              <span className={styles.and}>{` and `}</span>
              <span className={styles.earlyEnrollmentDeadline}>
                Regular Enrollment Deadline
              </span>
              <span className={styles.and}>.</span>
            </p>
            <ul className={styles.ifRegisteredByTheEarlyEnr}>
              <li className={styles.iUnderstandThat}>
                <span className={styles.and}>{`If registered `}</span>
                <span className={styles.earlyEnrollmentDeadline}>
                  BY the Early Enrollment Deadline
                </span>
                <span className={styles.and}>, you will be</span>
                <span className={styles.earlyEnrollmentDeadline}>
                  {" "}
                  eligible for the $25 discount
                </span>
                <span className={styles.forEachClass}>
                  {" "}
                  for each class if you pay full tuition (post mark or in
                  person) by the early enrollment deadline.
                </span>
              </li>
              <li className={styles.iUnderstandThat}>
                <span className={styles.forEachClass}>{`If registered `}</span>
                <span className={styles.earlyEnrollmentDeadline}>
                  BY the Regular Enrollment Deadline
                </span>
                <span className={styles.and}>
                  , tuition and registration fee are required.
                </span>
              </li>
              <li>
                <span className={styles.and}>{`If registered `}</span>
                <span
                  className={styles.earlyEnrollmentDeadline}
                >{`AFTER `}</span>
                <span className={styles.and}>
                  the Regular Enrollment Deadline, a
                </span>
                <span
                  className={styles.earlyEnrollmentDeadline}
                >{` $30 late fee `}</span>
                <span className={styles.and}>will be added to tuition.</span>
              </li>
            </ul>
          </div>
          <div className={styles.enrollmentForAcesContainer}>
            <p className={styles.pondSpringsRd}>
              <span className={styles.and}>{`Enrollment for `}</span>
              <span className={styles.earlyEnrollmentDeadline}>
                ACES Academic Enrichment Center’s English Enrichment Program
              </span>
              <span className={styles.and}> and</span>
              <span className={styles.earlyEnrollmentDeadline}>
                {" "}
                Austin Chinese Education Services’ Chinese Course
              </span>
              <span
                className={styles.forEachClass}
              >{` are completely separated, meaning you must fill out separate enrollment forms and provide separate checks for `}</span>
              <span className={styles.earlyEnrollmentDeadline}>
                EACH PROGRAM
              </span>
              <span className={styles.forEachClass}>.</span>
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.pondSpringsRd}>
              <span
                className={styles.forEachClass}
              >{`Also, be aware that each program has its `}</span>
              <span className={styles.earlyEnrollmentDeadline}>
                own deadlines
              </span>
              <span className={styles.and}>
                {" "}
                for early and regular enrollment.
              </span>
            </p>
          </div>
          <b className={styles.enrollmentDeadlines}>Enrollment Deadlines</b>
          <b className={styles.separateEnrollment}>Separate Enrollment</b>
          <b className={styles.enrollmentTuition1}>{`Enrollment & Tuition`}</b>
        </div>
        <div className={styles.header}>
          <div className={styles.headerChild} />
          <div className={styles.navbar}>
            <img
              className={styles.navbarChild}
              alt=""
              src="/polygon-6@2x.png"
              onClick={openApplyNowDrop}
            />
            <b className={styles.applyNow} onClick={openApplyNowDrop1}>
              Apply Now!
            </b>
            <div className={styles.abUsPredrop}>
              <img
                className={styles.abUsPredropChild}
                alt=""
                src="/polygon-3@2x.png"
                onClick={openAbUsDrop}
              />
              <b className={styles.aboutUs} onClick={onAboutUsTextClick}>
                About Us
              </b>
            </div>
            <div className={styles.schedulePreDrop}>
              <b className={styles.schedule} onClick={openScheduleDrop}>
                Schedule
              </b>
              <img
                className={styles.schedulePreDropChild}
                alt=""
                src="/polygon-3@2x.png"
                onClick={openScheduleDrop1}
              />
            </div>
          </div>
          <b className={styles.home} onClick={onHomeTextClick}>
            <p className={styles.pondSpringsRd}>Home</p>
          </b>
          <div className={styles.acesLogo}>
            <b className={styles.academic}>{`Academic `}</b>
            <b className={styles.enrichmentCenter}>{`Enrichment Center `}</b>
            <img
              className={styles.aceslogo1Icon}
              alt=""
              src="/aceslogo-1@2x.png"
            />
          </div>
          <b className={styles.programs} onClick={openProgramsDrop}>
            Programs
          </b>
          <img
            className={styles.headerItem}
            alt=""
            src="/polygon-3@2x.png"
            onClick={openProgramsDrop1}
          />
        </div>
        <div className={styles.contactHeader}>
          <div className={styles.contactHeaderChild} />
          <div className={styles.applyNow1} onClick={onApplyNowContainerClick}>
            <div className={styles.applyNowChild} />
            <b className={styles.applyNow2}>Apply Now!</b>
          </div>
          <img className={styles.socialsIcon1} alt="" src="/socials@2x.png" />
          <div className={styles.infoaceslearningcentercom1}>
            <p className={styles.pondSpringsRd}>info@AcesLearningCenter.com</p>
          </div>
          <div className={styles.div2}>
            <p className={styles.pondSpringsRd}>512-918-8828</p>
          </div>
          <img className={styles.vectorIcon1} alt="" src="/vector4@2x.png" />
          <img
            className={styles.solarphoneLinearIcon1}
            alt=""
            src="/solarphonelinear@2x.png"
          />
        </div>
      </div>
      {isApplyNowDropOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeApplyNowDrop}
        >
          <ApplyNowDrop onClose={closeApplyNowDrop} />
        </PortalPopup>
      )}
      {isApplyNowDrop1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeApplyNowDrop1}
        >
          <ApplyNowDrop onClose={closeApplyNowDrop1} />
        </PortalPopup>
      )}
      {isAbUsDropOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAbUsDrop}
        >
          <AbUsDrop onClose={closeAbUsDrop} />
        </PortalPopup>
      )}
      {isScheduleDropOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeScheduleDrop}
        >
          <ScheduleDrop onClose={closeScheduleDrop} />
        </PortalPopup>
      )}
      {isScheduleDrop1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeScheduleDrop1}
        >
          <ScheduleDrop onClose={closeScheduleDrop1} />
        </PortalPopup>
      )}
      {isProgramsDropOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProgramsDrop}
        >
          <ProgramsDrop onClose={closeProgramsDrop} />
        </PortalPopup>
      )}
      {isProgramsDrop1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProgramsDrop1}
        >
          <ProgramsDrop onClose={closeProgramsDrop1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Policies;
