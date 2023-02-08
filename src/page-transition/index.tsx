import React, { useRef, useEffect } from "react";
import gsap, { Power2 } from "gsap";
import classNames from "clsx";
import styles from "./PageTransition.module.scss";

interface PageTransitionProps {
  timeline: gsap.core.Timeline;
}

const PageTransition = ({ timeline }: PageTransitionProps) => {
  const firstLayer = useRef(null);
  const secondLayer = useRef(null);

  useEffect(() => {
    timeline.to(
      firstLayer.current,
      {
        duration: 0.9,
        xPercent: 100,
        ease: Power2.easeOut,
      },
      "0"
    );
    timeline.to(
      secondLayer.current,
      {
        duration: 0.9,
        xPercent: 100,
        ease: Power2.easeOut,
      },
      "-=0.75"
    );
  });

  return (
    <div className={styles.pageTransition}>
      <div
        className={classNames(styles.layer, styles.secondLayer)}
        ref={secondLayer}
      ></div>
      <div
        className={classNames(styles.layer, styles.firstLayer)}
        ref={firstLayer}
      ></div>
    </div>
  );
};

export default PageTransition;
