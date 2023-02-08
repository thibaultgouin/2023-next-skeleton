import type { NextPage } from "next";
import A03Heading from "../../components/atoms/a03-heading/A03Heading";
import Layout from "../../components/layout/Layout";
import styles from "./about.module.scss";

const About: NextPage = () => {
  return (
    <Layout title="About page" description="Description for about page">
      <div className={styles.about}>
        <div className={styles.container}>
          <A03Heading tag="h1" size="h3" text="About content" />
        </div>
      </div>
    </Layout>
  );
};

export default About;
