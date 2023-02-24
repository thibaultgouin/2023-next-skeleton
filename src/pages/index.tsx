import type { NextPage } from "next";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import PageTransition from "../page-transition";
import A03Heading from "../components/atoms/a03-heading/A03Heading";
import Layout from "../components/layout/Layout";
import styles from "./Home.module.scss";

const Home: NextPage = () => {
  const home = gsap.timeline();
  const heading = useRef(null);

  useEffect(() => {
    home.fromTo(
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
      <PageTransition timeline={home} />
      <Layout title="Next Homepage" description="Description for homepage">
        <div className={styles.homepage}>
          <div className={styles.container}>
            <div ref={heading}>
              <A03Heading tag="h1" text="Homepage content" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
