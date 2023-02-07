import { ReactNode } from "react";
import Head from "next/head";
import styles from "./Layout.module.scss";
import B01Navigation from "../blocks/b01-navigation/B01Navigation";
import B02Footer from "../blocks/b02-footer/B02Footer";

export interface LayoutProps {
  title?: string;
  description: string;
  children?: ReactNode;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Layout}>
        <B01Navigation />
        <div className={styles.main}>{children}</div>
        <B02Footer />
      </div>
    </div>
  );
};

export default Layout;
