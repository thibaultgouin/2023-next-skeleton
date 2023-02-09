import { useRouter } from "next/router";
import React from "react";
import A04Text from "../../atoms/a04-text/A04Text";
import M01Link from "../../molecules/m01-link/M01Link";
import styles from "./B01Navigation.module.scss";

const B01Navigation: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className={styles.b01Navigation}>
      <div className={styles.container}>
        <A04Text text="Navigation content" />
        <ul className={styles.links}>
          <li className={styles.link}>
            <M01Link
              className={pathname === "/" && styles.isInactive}
              href="/"
              text="Homepage"
            />
          </li>
          <li className={styles.link}>
            <M01Link
              className={pathname === "/about" && styles.isInactive}
              href="/about"
              text="About"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default B01Navigation;
