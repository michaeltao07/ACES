import { useState, useCallback } from "react";
import ApplyNowDrop from "../components/ApplyNowDrop";
import PortalPopup from "../components/PortalPopup";
import AbUsDrop from "../components/AbUsDrop";
import ScheduleDrop from "../components/ScheduleDrop";
import ProgramsDrop from "../components/ProgramsDrop";
import { useNavigate } from "react-router-dom";
import styles from "./FallSchedule.module.css";

const FallSchedule = () => {
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
      <div className={styles.fallSchedule}>
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
            src="/materialsymbolsfaxoutline1@2x.png"
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
            src="/solarphonelinear1@2x.png"
          />
          <div className={styles.am5pm}>9AM - 5PM Mon-Fri</div>
          <b className={styles.contactUs}>
            <p className={styles.pondSpringsRd}>Contact Us</p>
          </b>
          <img className={styles.vectorIcon} alt="" src="/vector3@2x.png" />
          <img className={styles.socialsIcon} alt="" src="/socials@2x.png" />
        </div>
        <div className={styles.clickBox}>
          <div className={styles.clickBoxChild} />
          <b className={styles.english}>English</b>
          <div className={styles.clickBoxItem} />
          <b className={styles.mathamatics}>Mathamatics</b>
          <div className={styles.clickBoxInner} />
          <b className={styles.programming}>Programming</b>
          <div className={styles.rectangleDiv} />
          <b className={styles.science}>Science</b>
          <div className={styles.clickBoxChild1} />
          <b className={styles.testPrep}>Test Prep</b>
          <b className={styles.whatWeOffer}>
            *Click the box to see all classes availible*
          </b>
          <b className={styles.whatWeOffer1}>
            *No classes November 18th, and 19th*
          </b>
        </div>
        <div className={styles.contactHeader}>
          <div className={styles.contactHeaderChild} />
          <div className={styles.applyNow} onClick={onApplyNowContainerClick}>
            <div className={styles.applyNowChild} />
            <b className={styles.applyNow1}>Apply Now!</b>
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
            src="/solarphonelinear1@2x.png"
          />
        </div>
        <div className={styles.component3}>
          <b className={styles.whatWeOffer2}>Fall Schedule</b>
          <img
            className={styles.component3Child}
            alt=""
            src="/arrow-1@2x.png"
          />
          <img className={styles.component3Item} alt="" src="/arrow-2@2x.png" />
          <div className={styles.calender}>
            <div className={styles.calenderChild} />
            <div className={styles.saturday}>
              <div className={styles.saturdayChild} />
              <div className={styles.saturdayItem} />
              <div className={styles.saturdayInner} />
              <div className={styles.saturdayChild1} />
              <div className={styles.saturdayChild2} />
              <div className={styles.saturdayChild3} />
              <b className={styles.saturday1}>Saturday</b>
            </div>
            <div className={styles.friday}>
              <div className={styles.saturdayChild} />
              <div className={styles.saturdayItem} />
              <div className={styles.saturdayInner} />
              <div className={styles.saturdayChild1} />
              <div className={styles.saturdayChild2} />
              <div className={styles.saturdayChild3} />
              <b className={styles.friday1}>Friday</b>
            </div>
            <div className={styles.thursday}>
              <div className={styles.saturdayChild} />
              <div className={styles.saturdayItem} />
              <div className={styles.saturdayInner} />
              <div className={styles.saturdayChild1} />
              <div className={styles.saturdayChild2} />
              <div className={styles.saturdayChild3} />
              <b className={styles.thursday1}>Thursday</b>
            </div>
            <div className={styles.wednesday}>
              <div className={styles.saturdayChild} />
              <div className={styles.saturdayItem} />
              <div className={styles.saturdayInner} />
              <div className={styles.saturdayChild1} />
              <div className={styles.saturdayChild2} />
              <div className={styles.saturdayChild3} />
              <b className={styles.wednesday1}>Wednesday</b>
            </div>
            <div className={styles.tuesday}>
              <div className={styles.saturdayChild} />
              <div className={styles.saturdayItem} />
              <div className={styles.saturdayInner} />
              <div className={styles.saturdayChild1} />
              <div className={styles.saturdayChild2} />
              <div className={styles.saturdayChild3} />
              <b className={styles.tuesday1}>Tuesday</b>
            </div>
            <div className={styles.monday}>
              <div className={styles.saturdayChild} />
              <div className={styles.saturdayItem} />
              <div className={styles.saturdayInner} />
              <div className={styles.saturdayChild1} />
              <div className={styles.saturdayChild2} />
              <div className={styles.saturdayChild3} />
              <b className={styles.monday1}>Monday</b>
              <b className={styles.b}>31</b>
              <b className={styles.b1}>7</b>
              <b className={styles.b2}>14</b>
              <b className={styles.b3}>21</b>
              <b className={styles.b4}>28</b>
              <b className={styles.b5}>1</b>
              <b className={styles.b6}>8</b>
              <b className={styles.b7}>15</b>
              <b className={styles.b8}>22</b>
              <b className={styles.b9}>29</b>
              <b className={styles.b10}>2</b>
              <b className={styles.b11}>9</b>
              <b className={styles.b12}>16</b>
              <b className={styles.b13}>23</b>
              <b className={styles.b14}>30</b>
              <b className={styles.b15}>3</b>
              <b className={styles.b16}>10</b>
              <b className={styles.b17}>17</b>
              <b className={styles.b18}>24</b>
              <b className={styles.b19}>31</b>
              <b className={styles.b20}>4</b>
              <b className={styles.b21}>11</b>
              <b className={styles.b22}>18</b>
              <b className={styles.b23}>25</b>
              <b className={styles.b24}>1</b>
              <b className={styles.b25}>5</b>
              <b className={styles.b26}>12</b>
              <b className={styles.b27}>19</b>
              <b className={styles.b28}>26</b>
              <b className={styles.b29}>2</b>
            </div>
            <div className={styles.sunday}>
              <div className={styles.saturdayChild} />
              <div className={styles.saturdayItem} />
              <div className={styles.saturdayInner} />
              <div className={styles.saturdayChild1} />
              <div className={styles.saturdayChild2} />
              <div className={styles.saturdayChild3} />
              <b className={styles.sunday1}>Sunday</b>
              <b className={styles.b30}>30</b>
              <b className={styles.b31}>6</b>
              <b className={styles.b32}>13</b>
              <b className={styles.b33}>20</b>
              <b className={styles.b34}>27</b>
              <div className={styles.sundayChild4} />
              <b className={styles.m2019am12pm}>M201: 9am-12pm</b>
            </div>
            <b className={styles.august}>August</b>
          </div>
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

export default FallSchedule;
