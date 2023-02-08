import type { NextPage } from "next";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import A03Heading from "../../components/atoms/a03-heading/A03Heading";
import PageTransition from "../../page-transition";
import Layout from "../../components/layout/Layout";
import styles from "./about.module.scss";

const About: NextPage = () => {
  const about = gsap.timeline();
  const heading = useRef(null);

  useEffect(() => {
    about.fromTo(
      heading.current,
      {
        duration: 0.6,
        skewX: 10,
        x: -100,
        opacity: 0,
      },
      {
        skewX: 0,
        x: 0,
        opacity: 1,
      },
      "0.4"
    );
  });

  return (
    <>
      <PageTransition timeline={about} />
      <Layout title="About page" description="Description for about page">
        <div className={styles.about}>
          <div className={styles.container}>
            <div ref={heading}>
              <A03Heading tag="h1" size="h3" text="About content" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
