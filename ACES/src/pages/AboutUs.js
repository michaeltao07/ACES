import { useState, useCallback } from "react";
import ApplyNowDrop from "../components/ApplyNowDrop";
import PortalPopup from "../components/PortalPopup";
import AbUsDrop from "../components/AbUsDrop";
import ScheduleDrop from "../components/ScheduleDrop";
import ProgramsDrop from "../components/ProgramsDrop";
import { useNavigate } from "react-router-dom";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
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
      <div className={styles.aboutUs}>
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
            src="/materialsymbolsfaxoutline2@2x.png"
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
          <img className={styles.socialsIcon} alt="" src="/socials1@2x.png" />
        </div>
        <div className={styles.whyUs}>
          <b className={styles.whyUs1}>
            <p className={styles.pondSpringsRd}>Why Us?</p>
          </b>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.aces}>
              <div className={styles.hourSesssions}>20 8-Hour Sesssions</div>
              <div className={styles.div2}>
                <p className={styles.pondSpringsRd}>{`<15`}</p>
              </div>
              <div className={styles.hours}>50 Hours</div>
              <div className={styles.act}>
                <p className={styles.pondSpringsRd}>30</p>
              </div>
              <div className={styles.fullProctoredTestsContainer}>5</div>
              <div className={styles.aces1}>ACES</div>
              <div className={styles.div5}>$995</div>
            </div>
            <div className={styles.aces2}>
              <div className={styles.hourSesssions}>9 2-Hour Sesssions</div>
              <div className={styles.div6}>
                <p className={styles.pondSpringsRd}>?</p>
              </div>
              <div className={styles.hours}>13.5 Hours</div>
              <div className={styles.act}>
                <p className={styles.pondSpringsRd}>1</p>
              </div>
              <div className={styles.fullProctoredTestsContainer}>2</div>
              <div className={styles.moreThanA}>More Than A Teacher</div>
              <div className={styles.div5}>$499</div>
            </div>
            <div className={styles.aces3}>
              <div className={styles.hourSesssions}>6 3-Hour Sesssions</div>
              <div className={styles.div6}>
                <p className={styles.pondSpringsRd}>?</p>
              </div>
              <div className={styles.hours}>18 Hours</div>
              <div className={styles.act}>4</div>
              <div className={styles.fullProctoredTestsContainer}>4</div>
              <div className={styles.kaplanOnsite}>Kaplan (Onsite)</div>
              <div className={styles.div5}>$499</div>
            </div>
            <div className={styles.aces4}>
              <div className={styles.hourSesssions}>6 3-Hour Sesssions</div>
              <div className={styles.div6}>
                <p className={styles.pondSpringsRd}>?</p>
              </div>
              <div className={styles.hours}>18 Hours</div>
              <div className={styles.act}>15</div>
              <div className={styles.act}>15</div>
              <div className={styles.fullProctoredTestsContainer}>4</div>
              <div className={styles.kaplanPrepTrio}>Kaplan (Prep Trio)</div>
              <div className={styles.div5}>$999</div>
            </div>
            <div className={styles.aces5}>
              <div className={styles.hourSesssions}>10 3-Hour Sesssions</div>
              <div className={styles.div19}>15</div>
              <div className={styles.hours}>30 Hours</div>
              <div className={styles.act}>13, 2 ACT</div>
              <div className={styles.fullProctoredTestsContainer}>4</div>
              <div className={styles.princetonClassroom}>
                Princeton (Classroom)
              </div>
              <div className={styles.div5}>$999</div>
            </div>
            <div className={styles.aces6}>
              <div className={styles.hourSesssions}>6 3-Hour Sesssions</div>
              <div className={styles.div19}>
                <p className={styles.pondSpringsRd}>25</p>
              </div>
              <div className={styles.hours}>18 Hours</div>
              <div className={styles.act}>13</div>
              <div className={styles.fullProctoredTestsContainer}>4</div>
              <div className={styles.princetonClassroom}>
                Princeton (Classroom)
              </div>
              <div className={styles.div5}>$599</div>
            </div>
            <div className={styles.titles}>
              <div className={styles.ofClassSessions}># of Class Sessions</div>
              <div className={styles.classSize}>
                <p className={styles.pondSpringsRd}>Class Size</p>
              </div>
              <div className={styles.hours}>Hours of Instruction</div>
              <div className={styles.act}>Practice Tests</div>
              <div className={styles.fullProctoredTestsContainer}>
                <p className={styles.pondSpringsRd}>Full Proctored Tests</p>
              </div>
              <div className={styles.company}>Company</div>
              <div className={styles.price}>Price</div>
            </div>
          </div>
        </div>
        <div className={styles.internships}>
          <b className={styles.internships1}>Internships</b>
          <div className={styles.internshipsChild} />
          <div className={styles.internshipsItem} />
          <div className={styles.internshipsInner} />
          <div className={styles.rectangleDiv} />
          <b className={styles.summerCampInstructor}>Summer Camp Instructor</b>
          <b className={styles.qualifications}>Qualifications</b>
          <b className={styles.description}>{`Description `}</b>
          <b className={styles.jobTitle}>Job Title</b>
          <b className={styles.howToApply}>How to apply</b>
          <b className={styles.interestsProgramDevelopmentContainer}>
            <ul className={styles.interestsProgramDevelopment}>
              <li className={styles.gpaOfAtLeast35On40Sca}>
                <span>
                  Interests: Program Development, Education, Leadership,
                  Management, Marketing
                </span>
              </li>
              <li className={styles.gpaOfAtLeast35On40Sca}>
                <span>
                  GPA of at least 3.5 on 4.0 scale (5.25 on 6.0 scale)
                </span>
              </li>
              <li className={styles.gpaOfAtLeast35On40Sca}>
                <span>
                  Extensive organizational skills and high sense of
                  responsibility
                </span>
              </li>
            </ul>
            <p className={styles.blankLine}>&nbsp;</p>
          </b>
          <b className={styles.pleaseEmailTheContainer}>
            <p className={styles.pondSpringsRd}>
              <span>{`-Please email the following to `}</span>
              <a
                className={styles.sueWang}
                href="mailto:enrichmentaces@gmail.com"
                target="_blank"
              >
                <span>
                  <span className={styles.sueWang1}>Sue Wang</span>
                </span>
              </a>
              <span>{`, `}</span>
            </p>
            <p className={styles.pondSpringsRd}>
              <span>With:</span>
            </p>
            <ul className={styles.interestsProgramDevelopment}>
              <li className={styles.gpaOfAtLeast35On40Sca}>
                <span>Resume</span>
              </li>
              <li className={styles.gpaOfAtLeast35On40Sca}>
                <span>Cover Letter</span>
              </li>
            </ul>
            <p className={styles.pondSpringsRd}>
              <span className={styles.blankLine2}>&nbsp;</span>
            </p>
          </b>
          <b className={styles.b}>-</b>
          <b className={styles.acesInstructorsTeach}>
            ACES Instructors teach courses to small groups of highly-motivated
            students, both beginners and advanced. The ideal candidate will be
            comfortable writing detailed lesson plans and have excellent
            organizational skills.
          </b>
        </div>
        <div className={styles.employment}>
          <b className={styles.jobOpportunities}>Job Opportunities</b>
          <b className={styles.qualifications1}>Qualifications</b>
          <b className={styles.howToApply1}>How to Apply</b>
          <b className={styles.jobsAvailable}>Jobs Available</b>
          <b className={styles.description1}>Description</b>
          <div className={styles.employmentChild} />
          <div className={styles.employmentItem} />
          <div className={styles.employmentInner} />
          <div className={styles.employmentChild1} />
          <b className={styles.emailTheFollowingContainer}>
            <p className={styles.pondSpringsRd}>
              {`Email the following items to Hui Quan, at `}
              <a
                className={styles.sueWang}
                href="mailto:enrichmentaces@gmail.com"
                target="_blank"
              >
                <span className={styles.sueWang1}>
                  info@aceslearningcenter.com
                </span>
              </a>
            </p>
            <ul className={styles.resumeCoverLetterSatAct}>
              <li className={styles.gpaOfAtLeast35On40Sca}>Resume</li>
              <li className={styles.gpaOfAtLeast35On40Sca}>Cover Letter</li>
              <li className={styles.gpaOfAtLeast35On40Sca}>
                SAT, ACT, or GRE Test Scores (SAT Instructor)
              </li>
              <li className={styles.gpaOfAtLeast35On40Sca}>
                Writing Sample (English Instructor)
              </li>
              <li>Sample Lesson Plan (ESL/English Instructor)</li>
            </ul>
          </b>
          <b className={styles.acesInstructorsTeach1}>
            ACES Instructors teach courses to small groups of highly-motivated
            students, both beginners and advanced. The ideal candidate will be
            comfortable writing detailed lesson plans and have excellent
            organizational skills.
          </b>
          <b className={styles.satpsatWorkshopInstructorContainer}>
            <ul className={styles.resumeCoverLetterSatAct}>
              <li className={styles.gpaOfAtLeast35On40Sca}>
                SAT/PSAT Workshop Instructor
              </li>
              <li className={styles.gpaOfAtLeast35On40Sca}>
                English Instructor
              </li>
              <li>ESL Instructor</li>
            </ul>
          </b>
          <b className={styles.anExcellentCommandContainer}>
            <ul className={styles.resumeCoverLetterSatAct}>
              <li className={styles.gpaOfAtLeast35On40Sca}>
                An excellent command of written and spoken English
              </li>
              <li className={styles.gpaOfAtLeast35On40Sca}>
                Exciting and engaging teaching style and desire to make creative
                lesson plans
              </li>
              <li className={styles.gpaOfAtLeast35On40Sca}>
                Academic coursework in English or Education. Graduate student
                status preferred. (English/ESL Instructor)
              </li>
              <li>
                Excellent SAT, ACT, or GRE scores (Top 5% in one or more subject
                areas) (SAT Instructor)
              </li>
            </ul>
          </b>
        </div>
        <div className={styles.whoWeAre}>
          <div className={styles.whoWeAreChild} />
          <div className={styles.whoWeAreItem} />
          <div className={styles.whoWeAreInner} />
          <b
            className={styles.acesAcademicEnrichment1}
          >{`ACES Academic Enrichment Center Programs are designed to create a simple, progressive ladder for success. We begin with our four-tract English Enrichment Program, which serves to both develop extensive and creative critical thinking skills as well as provide ample preparation for college entrance exam. Therefore the program’s tracts mirror the format of the PSAT/SAT including Vocabulary, Critical Reading, Writing, and Speech & Debate. Our Enrichment Summer Camp Program functions as an extension of the English Enrichment Program, providing engaging week to two-week long half-day camps in many interdisciplinary topics. After students have completed the English Enrichment Program, they transition to our high school level Test Preparation and College Preparation Program. Our Test Preparation Program employs a balanced approach between hands-on practice and strategic lecture in our multiple intensive workshops for the SAT/PSAT, ACT, and SAT II Subject Tests. Our College Preparation Program focuses specifically on creating pristine college applications and essays as well as preparing students for college-level writing and research.`}</b>
          <b className={styles.ourMissionAt}>
            Our mission at ACES Academic Enrichment Center is to provide the
            challenge that everyday school cannot. Countless studies1 have shown
            how more and more students today are unprepared for college because
            they are not taught the complex, higher-order analytical skills
            college-level courses require. Therefore this is just what ACES
            Academic Enrichment Center strives to achieve, creating challenging
            and engaging curricula that will develop critical thinkers with a
            strong academic foundation for success. Our courses challenge
            students to ask questions and form their own opinions about the
            world around them through active and creative lessons on
            interdisciplinary topics that include readings, intensive vocabulary
            lessons, and in-class debate. Through our small class size and
            competitive tuition, ACES can mold curricula to each unique
            classroom and ensure your child is genuinely engaged and loves to
            learn.
          </b>
          <b className={styles.ourMission}>Our Mission</b>
          <b className={styles.ourPrograms}>Our Programs</b>
          <b className={styles.whoWeAre1}>Who We Are</b>
          <div className={styles.quote1}>
            <img
              className={styles.iconParkOutlinequote}
              alt=""
              src="/iconparkoutlinequote@2x.png"
            />
            <img
              className={styles.iconParkOutlinequote1}
              alt=""
              src="/iconparkoutlinequote1@2x.png"
            />
            <div className={styles.weStriveTo}>
              We strive to develop active, critical thinkers, who question the
              world around them.
            </div>
          </div>
          <div className={styles.quote2}>
            <div className={styles.weProvideA}>
              We provide a simple, progressive ladder for success.
            </div>
            <img
              className={styles.iconParkOutlinequote2}
              alt=""
              src="/iconparkoutlinequote1@2x.png"
            />
            <img
              className={styles.iconParkOutlinequote3}
              alt=""
              src="/iconparkoutlinequote@2x.png"
            />
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
              <b className={styles.aboutUs1} onClick={onAboutUsTextClick}>
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
              src="/aceslogo-11@2x.png"
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
          <div className={styles.infoaceslearningcentercom3}>
            <p className={styles.pondSpringsRd}>info@AcesLearningCenter.com</p>
          </div>
          <div className={styles.div26}>
            <p className={styles.pondSpringsRd}>512-918-8828</p>
          </div>
          <img className={styles.vectorIcon1} alt="" src="/vector4@2x.png" />
          <img
            className={styles.solarphoneLinearIcon1}
            alt=""
            src="/solarphonelinear5@2x.png"
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

export default AboutUs;
