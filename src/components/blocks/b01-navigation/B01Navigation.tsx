import React from "react";
import A04Text from "../../atoms/a04-text/A04Text";
import M01Link from "../../molecules/m01-link/M01Link";
import styles from "./B01Navigation.module.scss";

const B01Navigation: React.FC = () => {
  return (
    <div className={styles.b01Navigation}>
      <div className={styles.container}>
        <A04Text text="Navigation content" />
        <ul className={styles.links}>
          <li className={styles.link}>
            <M01Link href="/" text="Homepage" />
          </li>
          <li className={styles.link}>
            <M01Link href="/about" text="About" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default B01Navigation;
