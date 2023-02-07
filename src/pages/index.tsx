import type { NextPage } from "next";
import A03Heading from "../components/atoms/a03-heading/A03Heading";
import Layout from "../components/layout/Layout";
import styles from "./Home.module.scss";

const Home: NextPage = () => {
  return (
    <Layout title="Next Homepage" description="Description for homepage">
      <div className={styles.homepage}>
        <div className={styles.container}>
          <A03Heading tag="h1" size="h3" text="Homepage content" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
