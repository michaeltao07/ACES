import { useState, useCallback } from "react";
import ApplyNowDrop from "../components/ApplyNowDrop";
import PortalPopup from "../components/PortalPopup";
import AbUsDrop from "../components/AbUsDrop";
import ScheduleDrop from "../components/ScheduleDrop";
import ProgramsDrop from "../components/ProgramsDrop";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
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
      <div className={styles.homePage}>
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
            src="/materialsymbolsfaxoutline5@2x.png"
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
            src="/solarphonelinear3@2x.png"
          />
          <div className={styles.am5pm}>9AM - 5PM Mon-Fri</div>
          <b className={styles.contactUs}>
            <p className={styles.pondSpringsRd}>Contact Us</p>
          </b>
          <img className={styles.vectorIcon} alt="" src="/vector7@2x.png" />
          <img className={styles.socialsIcon} alt="" src="/socials@2x.png" />
        </div>
        <div className={styles.whoWeAre}>
          <img
            className={styles.whoWeAreChild}
            alt=""
            src="/ellipse-15@2x.png"
          />
          <div className={styles.ourMission}>Our Mission</div>
          <div className={styles.whoWeAreItem} />
          <div className={styles.huiQuan}>Hui Quan</div>
          <div className={styles.quote1}>
            <img
              className={styles.iconParkOutlinequote}
              alt=""
              src="/iconparkoutlinequote2@2x.png"
            />
            <img
              className={styles.iconParkOutlinequote1}
              alt=""
              src="/iconparkoutlinequote3@2x.png"
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
              src="/iconparkoutlinequote3@2x.png"
            />
            <img
              className={styles.iconParkOutlinequote3}
              alt=""
              src="/iconparkoutlinequote2@2x.png"
            />
          </div>
        </div>
        <div className={styles.reviews}>
          <div className={styles.reviewsChild} />
          <div className={styles.reviewsItem} />
          <div className={styles.youtube}>
            <div className={styles.youtubeChild} />
          </div>
          <b className={styles.youtubeLink}>Youtube Link</b>
          <b className={styles.reviews1}>Reviews</b>
          <b className={styles.whyUs}>Why Us?</b>
          <div className={styles.component2}>
            <div className={styles.review4}>
              <div className={styles.review4Child} />
              <img className={styles.review4Item} alt="" src="/star-1@2x.png" />
              <img
                className={styles.review4Inner}
                alt=""
                src="/star-1@2x.png"
              />
              <img className={styles.starIcon} alt="" src="/star-1@2x.png" />
              <img
                className={styles.review4Child1}
                alt=""
                src="/star-1@2x.png"
              />
              <img
                className={styles.review4Child2}
                alt=""
                src="/star-1@2x.png"
              />
              <b className={styles.iThinkThe}>
                “I think the best thing about this program was the amount of
                practice I got. At the end of the program I knew the SAT inside
                and out.”
              </b>
              <b className={styles.jennyL}>-Jenny L</b>
            </div>
            <div className={styles.review3}>
              <div className={styles.review4Child} />
              <img className={styles.review4Item} alt="" src="/star-1@2x.png" />
              <img
                className={styles.review4Inner}
                alt=""
                src="/star-1@2x.png"
              />
              <img className={styles.starIcon} alt="" src="/star-1@2x.png" />
              <img
                className={styles.review4Child1}
                alt=""
                src="/star-1@2x.png"
              />
              <img
                className={styles.review4Child2}
                alt=""
                src="/star-1@2x.png"
              />
              <b className={styles.iThinkThe}>
                “ACES offers a wide variety of methods that really help build up
                my endurance and SAT skills. Even though the classes were
                lengthy, every minute was used towards improving our score; no
                time was wasted. ACES not only teaches the tricks and shortcuts
                as most test prep agencies, but also real strategies and
                discussions that give you a fuller understanding of what you’re
                being tested on that are fail-proof on almost every test. I
                believe to be successful at taking standardized tests, you must
                practice problems over and over, and that is what makes ACES
                stand out. It offers continuous practice.”
              </b>
              <b className={styles.rebeccaB}>
                <p className={styles.pondSpringsRd}>-Rebecca B</p>
              </b>
            </div>
            <div className={styles.review2}>
              <div className={styles.review4Child} />
              <img className={styles.review4Item} alt="" src="/star-1@2x.png" />
              <img
                className={styles.review4Inner}
                alt=""
                src="/star-5@2x.png"
              />
              <img className={styles.starIcon} alt="" src="/star-1@2x.png" />
              <img
                className={styles.review4Child1}
                alt=""
                src="/star-1@2x.png"
              />
              <img
                className={styles.review4Child2}
                alt=""
                src="/star-1@2x.png"
              />
              <b className={styles.iThinkThe}>
                <p className={styles.pondSpringsRd}>
                  “The instructor[s] clearly know what they are doing and
                  definitely more than qualified to teach. They dedicate their
                  time to the improvement of our scores and understanding.”
                </p>
              </b>
              <b className={styles.rochelleF}>-Rochelle F</b>
            </div>
            <div className={styles.review1}>
              <div className={styles.review4Child} />
              <img className={styles.review4Item} alt="" src="/star-1@2x.png" />
              <img
                className={styles.review4Inner}
                alt=""
                src="/star-1@2x.png"
              />
              <img className={styles.starIcon} alt="" src="/star-1@2x.png" />
              <img
                className={styles.review4Child1}
                alt=""
                src="/star-1@2x.png"
              />
              <img
                className={styles.review4Child2}
                alt=""
                src="/star-1@2x.png"
              />
              <b className={styles.iThinkThe}>
                “ACES SAT Intensive Workshop offers really good feedback on my
                SAT practice essays. The instructors offer specific feedback
                that gave me an idea of certain things I wasn’t aware of myself.
                They also went through all of my practice essays with me, and
                wrote detailed comments and suggestions for me. It helped me
                improve my writing significantly.”
              </b>
              <b className={styles.gregT}>-Greg T</b>
            </div>
          </div>
        </div>
        <div className={styles.whatWeOffer}>
          <div className={styles.testPrep}>
            <img className={styles.satLogoIcon} alt="" src="/sat-logo@2x.png" />
            <img className={styles.apLogoIcon} alt="" src="/ap-logo@2x.png" />
            <b className={styles.testPrep1}>Test Prep</b>
          </div>
          <div className={styles.summerCamps}>
            <b className={styles.readMore}>
              <p className={styles.pondSpringsRd}>Read more</p>
            </b>
            <b className={styles.weAreExcitedContainer}>
              <p className={styles.pondSpringsRd}>
                We are excited to announce that the 2023 Enrichment Summer Camp
                Schedule is now available online. Our summer camp offers a wide
                range of engaging and interactive programs for children of all
                ages. From arts and crafts to science and technology, our
                diverse course offerings are designed to spark curiosity,
                encourage creativity, and help your child develop essential
                skills.
              </p>
            </b>
            <b className={styles.summerCamps1}>Summer Camps</b>
          </div>
          <div className={styles.enrichmentPrograms}>
            <div className={styles.tutoring}>
              <b className={styles.tutoring1}>Tutoring</b>
              <img
                className={styles.mditeachIcon}
                alt=""
                src="/mditeach@2x.png"
              />
            </div>
            <div className={styles.programming}>
              <b className={styles.tutoring1}>Programming</b>
              <img
                className={styles.iconParkOutlinecodeCompute}
                alt=""
                src="/iconparkoutlinecodecomputer@2x.png"
              />
            </div>
            <div className={styles.science}>
              <b className={styles.tutoring1}>Science</b>
              <img
                className={styles.mingcutescienceLineIcon}
                alt=""
                src="/mingcutescienceline@2x.png"
              />
            </div>
            <div className={styles.math}>
              <b className={styles.tutoring1}>Math</b>
              <img
                className={styles.tablermathIcon}
                alt=""
                src="/tablermath@2x.png"
              />
            </div>
            <div className={styles.english}>
              <b className={styles.tutoring1}>English</b>
              <img
                className={styles.iconParkOutlinewritingFlue}
                alt=""
                src="/iconparkoutlinewritingfluently@2x.png"
              />
            </div>
            <b className={styles.enrichmentPrograms1}>Enrichment Programs</b>
          </div>
          <b className={styles.whatWeOffer1}>What We Offer</b>
        </div>
        <div className={styles.component1}>
          <img className={styles.icon} alt="" src="/4@2x.png" />
          <img className={styles.icon1} alt="" src="/3@2x.png" />
          <img className={styles.icon2} alt="" src="/2@2x.png" />
          <img className={styles.icon3} alt="" src="/1@2x.png" />
        </div>
        <div className={styles.header}>
          <div className={styles.headerChild} />
          <div className={styles.navbar}>
            <img
              className={styles.navbarChild}
              alt=""
              src="/polygon-4@2x.png"
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
          <b className={styles.home}>
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
          <div className={styles.applyNow1}>
            <div className={styles.applyNowChild} />
            <b className={styles.applyNow2}>Apply Now!</b>
          </div>
          <img className={styles.socialsIcon1} alt="" src="/socials1@2x.png" />
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
            src="/solarphonelinear4@2x.png"
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

export default HomePage;
