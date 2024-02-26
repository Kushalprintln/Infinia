import React, { useEffect, useRef } from 'react';
import { FaCoffee, FaCode, FaClock, FaLaptop } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import { BiWorld } from "react-icons/bi";
import { useCountUp } from 'react-countup';
import { LuSofa } from "react-icons/lu";
import { MdOutlineMergeType } from "react-icons/md";
import styles from './StatisticSection.module.css';

const StatisticSection = () => {
  const coffeeRef = useRef(null);
  const codeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  const { countUp: countCoffee, start: startCoffee } = useCountUp({
    end: 7,
    duration: 5,
    start: 0,
    ref: coffeeRef,
  });
  const { countUp: countCode, start: startCode } = useCountUp({
    end: 2,
    duration: 5,
    start: 0,
    ref: codeRef,
  });
  const { countUp: countExperience, start: startExperience } = useCountUp({
    end: 10000,
    duration: 5,
    start: 0,
    ref: experienceRef,
  });
  const { countUp: countProject, start: startProject } = useCountUp({
    end: 260,
    duration: 5,
    start: 0,
    ref: projectRef,
  });

  useEffect(() => {
    if (coffeeRef.current && codeRef.current && experienceRef.current && projectRef.current) {
      startCoffee();
      startCode();
      startExperience();
      startProject();
    }
  }, [startCoffee, startCode, startExperience, startProject]);

  return (
    <section id="statistic" className={styles.statisticSection}>
      <div className="container">
        <div className="row text-center">
          <div className="col-xs-12 col-md-3">
            <div className={styles.counter}>
              <TiTick className={`${styles.statsIcon} ${styles.coffeeIcon}`} />
              <h2 ref={coffeeRef} className={`${styles.timer} ${styles.countTitle}`}>
                {countCoffee}
              </h2>
              <div className={styles.statsLine}></div>
              <p className={styles.statsText}>Year Of Experience</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className={styles.counter}>
              <BiWorld  className={`${styles.statsIcon} ${styles.codeIcon}`} />
              <h2 ref={codeRef} className={`${styles.timer} ${styles.countTitle}`}>
                {countCode}
              </h2>
              <div className={styles.statsLine}></div>
              <p className={styles.statsText}>Countries</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className={styles.counter}>
              <LuSofa className={`${styles.statsIcon} ${styles.clockIcon}`} />
              <h2 ref={experienceRef} className={`${styles.timer} ${styles.countTitle}`}>
                {countExperience}
              </h2>
              <div className={styles.statsLine}></div>
              <p className={styles.statsText}>Furniture Sold</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className={styles.counter}>
              <MdOutlineMergeType className={`${styles.statsIcon} ${styles.laptopIcon}`} />
              <h2 ref={projectRef} className={`${styles.timer} ${styles.countTitle}`}>
                {countProject}
              </h2>
              <div className={styles.statsLine}></div>
              <p className={styles.statsText}>Varients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticSection;