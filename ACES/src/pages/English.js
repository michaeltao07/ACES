import { useState, useCallback } from "react";
import ApplyNowDrop from "../components/ApplyNowDrop";
import PortalPopup from "../components/PortalPopup";
import AbUsDrop from "../components/AbUsDrop";
import ScheduleDrop from "../components/ScheduleDrop";
import ProgramsDrop from "../components/ProgramsDrop";
import { useNavigate } from "react-router-dom";
import styles from "./English.module.css";

const English = () => {
  const [isApplyNowDropOpen, setApplyNowDropOpen] = useState(false);
  const [isApplyNowDrop1Open, setApplyNowDrop1Open] = useState(false);
  const [isAbUsDropOpen, setAbUsDropOpen] = useState(false);
  const [isScheduleDropOpen, setScheduleDropOpen] = useState(false);
  const [isScheduleDrop1Open, setScheduleDrop1Open] = useState(false);
  const [isProgramsDropOpen, setProgramsDropOpen] = useState(false);
  const [isProgramsDrop1Open, setProgramsDrop1Open] = useState(false);
  const navigate = useNavigate();

  const onApplyNowContainerClick = useCallback(() => {
    window.open(
      "http://www.aceslearningcenter.com/aces-2021-fall-enrichment-course-enrollment-form/"
    );
  }, []);

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

  return (
    <>
      <div className={styles.english}>
        <div className={styles.contactHeader}>
          <div className={styles.contactHeaderChild} />
          <div className={styles.applyNow} onClick={onApplyNowContainerClick}>
            <div className={styles.applyNowChild} />
            <b className={styles.applyNow1}>Apply Now!</b>
          </div>
          <img className={styles.socialsIcon} alt="" src="/socials@2x.png" />
          <div className={styles.infoaceslearningcentercom}>
            <p className={styles.p}>info@AcesLearningCenter.com</p>
          </div>
          <div className={styles.div}>
            <p className={styles.p}>512-918-8828</p>
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector4@2x.png" />
          <img
            className={styles.solarphoneLinearIcon}
            alt=""
            src="/solarphonelinear3@2x.png"
          />
        </div>
        <div className={styles.background} />
        <div className={styles.whyUs}>
          <b className={styles.specificTracts}>Specific Tracts</b>
          <div className={styles.accordion}>
            <div className={styles.accordionChild} />
            <div className={styles.header}>
              <b className={styles.vocabulary}>Vocabulary</b>
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector5@2x.png"
              />
            </div>
            <div className={styles.accordionChild} />
            <div className={styles.overviewParent}>
              <b className={styles.overview}>Overview</b>
              <div className={styles.weAtAcesContainer}>
                <span className={styles.weAtAcesBelieveStudentsSh}>
                  {`We at ACES believe students should learn to truly `}
                  <span className={styles.own}>‘OWN’</span>
                </span>
                <span
                  className={styles.weAtAcesBelieveStudentsSh}
                >{` vocabulary words. Therefore, unlike most school courses that just throw words at students to memorize, we utilize `}</span>
                <span className={styles.interactiveLessonsAnd}>
                  interactive lessons and consistent repetition
                </span>
                <span
                  className={styles.toEnsureStudents}
                >{` to ensure students not only know word meanings, but also their pronunciation, associated connotations, and common usages. Students will learn a variety of study techniques throughout the tract as well in order to utilize the most effective method in later courses and into college. Early classes focus on `}</span>
                <span className={styles.interactiveLessonsAnd}>
                  developing spelling abilities and vocabulary foundations
                </span>
                <span
                  className={styles.toEnsureStudents}
                >{`, which provides the skills to decipher the meaning of new, unknown words and introduces basic SAT/ACT words. Later classes will focus on even more advanced words divided by major categories and lead into `}</span>
                <span className={styles.interactiveLessonsAnd}>
                  official SAT vocabulary courses
                </span>
                <span className={styles.toEnsureStudents}>.</span>
              </div>
            </div>
          </div>
          <div className={styles.whyUsChild} />
          <div className={styles.whyUsItem} />
          <div className={styles.whyUsInner} />
          <div className={styles.rectangleDiv} />
          <b className={styles.fall23}>Fall 23</b>
          <b className={styles.spring24}>Spring 24</b>
          <b className={styles.summer24}>Summer 24</b>
          <b className={styles.notOffered}>Not Offered</b>
          <div className={styles.accordion1}>
            <div className={styles.accordionChild} />
            <div className={styles.header}>
              <b className={styles.criticalReading}>Critical Reading</b>
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector5@2x.png"
              />
            </div>
            <div className={styles.accordionChild} />
          </div>
          <div className={styles.accordion2}>
            <div className={styles.accordionChild} />
            <div className={styles.header}>
              <b className={styles.criticalReading}>Writing</b>
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector5@2x.png"
              />
            </div>
            <div className={styles.accordionChild} />
          </div>
          <div className={styles.accordion3}>
            <div className={styles.accordionChild} />
            <div className={styles.header}>
              <b className={styles.speechDebate}>{`Speech & Debate`}</b>
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector5@2x.png"
              />
            </div>
            <div className={styles.accordionChild} />
          </div>
        </div>
        <div className={styles.englishOverview}>
          <div className={styles.englishOverviewChild} />
          <div className={styles.theEnglishEnrichmentContainer}>
            <p className={styles.p}>
              <span
                className={styles.toEnsureStudents}
              >{`The English Enrichment Program encompasses a `}</span>
              <span className={styles.interactiveLessonsAnd}>
                4-tract Curriculum
              </span>
              <span
                className={styles.toEnsureStudents}
              >{` that focuses on the `}</span>
              <span className={styles.interactiveLessonsAnd}>
                early development of critical thinking skills
              </span>
              <span
                className={styles.toEnsureStudents}
              >{` not only for optimal performance in school, but also for the SAT/ACT. Each tract systemically progresses students from 3rd grade all the way to 10th and mirrors major categories on the SAT/ACT: vocabulary, reading, writing, and speech and debate. The goal of this curriculum is to `}</span>
              <span className={styles.interactiveLessonsAnd}>
                prevent last minute cramming for the SAT/ACT
              </span>
              <span className={styles.toEnsureStudents}>
                {" "}
                during the summer before they take the test as most students do.
                If a student completes this program, the required skills to
                succeed on the SAT/ACT will come naturally to them because they
                will have already thoroughly practiced those skills for several
                years.
              </span>
            </p>
            <p className={styles.p}>
              <span className={styles.toEnsureStudents}>&nbsp;</span>
            </p>
            <p className={styles.p}>
              <span
                className={styles.toEnsureStudents}
              >{`For a printable PDF of the English Enrichment Course Flowchart, `}</span>
              <span className={styles.click}>{`click `}</span>
              <a
                className={styles.here}
                href="http://www.aceslearningcenter.com/wp-content/uploads/2015/11/English-Enrichment-Course-Flowchart.pdf"
                target="_blank"
              >
                <span className={styles.click}>
                  <span className={styles.own}>here</span>
                </span>
              </a>
            </p>
          </div>
          <b className={styles.englishEnrichment}>
            English Enrichment - Overview
          </b>
        </div>
        <div className={styles.header4}>
          <div className={styles.headerChild} />
          <div className={styles.navbar}>
            <img
              className={styles.navbarChild}
              alt=""
              src="/polygon-4@2x.png"
              onClick={openApplyNowDrop}
            />
            <b className={styles.applyNow2} onClick={openApplyNowDrop1}>
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
            <p className={styles.p}>Home</p>
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
            src="/materialsymbolsfaxoutline4@2x.png"
          />
          <div className={styles.pondSpringsRdContainer}>
            <p className={styles.p}>13581 Pond Springs Rd #200</p>
            <p className={styles.p}>Austin, TX 78729</p>
          </div>
          <div className={styles.infoaceslearningcentercom2}>
            info@aceslearningcenter.com
          </div>
          <b className={styles.acesAcademicEnrichment}>
            © 2023 ACES Academic Enrichment Center - All Rights Reserved
          </b>
          <div className={styles.div1}>(512) 284 - 1181</div>
          <div className={styles.div2}>(512) 918 - 8828</div>
          <img
            className={styles.solarphoneLinearIcon1}
            alt=""
            src="/solarphonelinear4@2x.png"
          />
          <div className={styles.am5pm}>9AM - 5PM Mon-Fri</div>
          <b className={styles.contactUs}>
            <p className={styles.p}>Contact Us</p>
          </b>
          <img className={styles.vectorIcon5} alt="" src="/vector3@2x.png" />
          <img className={styles.socialsIcon1} alt="" src="/socials@2x.png" />
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

export default English;
