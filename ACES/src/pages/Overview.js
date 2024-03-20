import { useState, useCallback } from "react";
import ApplyNowDrop from "../components/ApplyNowDrop";
import PortalPopup from "../components/PortalPopup";
import AbUsDrop from "../components/AbUsDrop";
import ScheduleDrop from "../components/ScheduleDrop";
import ProgramsDrop from "../components/ProgramsDrop";
import { useNavigate } from "react-router-dom";
import styles from "./Overview.module.css";

const Overview = () => {
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
      <div className={styles.overview}>
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
          <img className={styles.socialsIcon} alt="" src="/socials@2x.png" />
        </div>
        <div className={styles.whyShouldI}>
          <div className={styles.whyShouldIChild} />
          <div className={styles.whyShouldIItem} />
          <div className={styles.whyShouldIInner} />
          <b className={styles.howIsItContainer}>
            <p className={styles.pondSpringsRd}>Responsible</p>
          </b>
          <b className={styles.howIsItContainer1}>
            <p className={styles.pondSpringsRd}>Challenging</p>
          </b>
          <b className={styles.howIsItContainer2}>
            <p className={styles.pondSpringsRd}>Collaborative</p>
          </b>
          <b className={styles.avoidTheCramContainer}>
            <ul className={styles.avoidTheCram}>
              <li>Avoid the Cram!</li>
            </ul>
          </b>
          <b className={styles.challengingEngagingCoursewoContainer}>
            <ul className={styles.avoidTheCram}>
              <li>Challenging, Engaging Coursework</li>
            </ul>
          </b>
          <b className={styles.collaborativeCurriculum}>
            <ul className={styles.avoidTheCram}>
              <li>Collaborative Curriculum</li>
            </ul>
          </b>
          <b className={styles.ourCurriculumIsContainer}>
            <p className={styles.pondSpringsRd}>
              Our curriculum is engineered to avoid SAT cramming!
            </p>
            <p className={styles.pondSpringsRd}>
              Studies show that the best way for the brain to genuinely learn
              something is through consistent repetition of shorter study
              sessions. For example, the brain is better able to process
              information if you study material for 2 hours for 5 days in a row
              (10 hours total) than if you study that very same material for 10
              hours the night before the test. This is simply because your brain
              over a long period has more time to transfer information from
              short-term to long-term memory so you can recall information more
              easily. The same principle is relevant to the SAT and ACT. By
              creating a stable, systematic program from 3rd to 10th grade,
              students have ample time to develop advanced skills that are
              tested on the SAT over a longer period of time.
            </p>
          </b>
          <b className={styles.isYourStudent}>
            Is your student bored at school simply because they aren’t
            challenged enough by regular school? Are they itching to face new
            topics and learn to solve complex problems? Then ACES Academic
            Enrichment Center is the place for you! We strive to make our
            coursework engaging, entertaining, and insightful in order to spark
            students interest and quench their thirst for learning. While we
            employ aspects of traditional teaching styles such as lectures,
            homework and tests to develop students sense of responsibility, we
            also make use of interactive and cross media lessons in order to
            emphasize the importance of learning and how to apply skills to
            everyday life to each of our students.
          </b>
          <b className={styles.weAtAces}>
            We at ACES Academic Enrichment Center believe the best way to
            solidify our teachings is through a collaborative curriculum. This
            means that the taught concepts are not only reviewed as students
            progress in each tract, but also reinforced as common themes in
            courses at the same grade level. For instance, the 6th grade
            vocabulary course may introduce the word ‘motif.’ The 6th grade
            reading class would therefore examine examples of motifs, and the
            6th grade writing course would focus on how to examine and explain
            motifs.
          </b>
          <b className={styles.howIfIt}>How if it Different?</b>
        </div>
        <div className={styles.youtubeLink}>
          <div className={styles.youtubeLinkChild} />
          <b className={styles.youtubeLink1}>Youtube Link</b>
          <b className={styles.whatWereAbout}>What were about</b>
        </div>
        <div className={styles.englishOverview}>
          <div className={styles.englishOverviewChild} />
          <div className={styles.ourProgramsAreContainer}>
            <p
              className={styles.pondSpringsRd}
            >{`Our programs are devised to create constant critical thinkers and provide a clear pathway to success in both school and life. The curriculum was built by analyzing trends in two major areas: deficiencies among even accelerated students in high-level critical thinking skills required by top Universities and common difficulties top students face on the SAT/ACT. Therefore are programs focus specifically on strengthening these problem areas over time so they become natural for our students. We divided the program into a four-tract English Enrichment curriculum made up of vocabulary, critical reading, writing, and speech & debate and a Summer Test & College Prep curriculum which specifically focuses on College Admission Test preparation.`}</p>
          </div>
          <div className={styles.weOfferCourseworkContainer}>
            <p className={styles.pondSpringsRd}>We offer:</p>
            <ul className={styles.courseworkForHighAchieving}>
              <li className={styles.courseworkForHigh}>
                Coursework for high achieving students, who want to be
                challenged and are hungry to learn
              </li>
              <li className={styles.courseworkForHigh}>
                Stable curriculum that provides clear route of progression for
                academic success
              </li>
              <li className={styles.courseworkForHigh}>
                Ample practice so high-level critical thinking skills become
                natural and easy
              </li>
              <li className={styles.courseworkForHigh}>
                Highly qualified instructors who specialize in interdisciplinary
                and cross media curricula
              </li>
              <li className={styles.courseworkForHigh}>
                Collaborative lesson plans reinforce important skills and
                concepts
              </li>
              <li className={styles.courseworkForHigh}>
                Extensive individualized attention to assess each students’
                weaknesses and give advice on their unique path to college
              </li>
            </ul>
            <p className={styles.pondSpringsRd}>&nbsp;</p>
          </div>
          <b className={styles.whatWeOffer}>What We Offer</b>
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
            src="/solarphonelinear1@2x.png"
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

export default Overview;
