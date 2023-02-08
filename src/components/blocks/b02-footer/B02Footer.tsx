import React from "react";
import A04Text from "../../atoms/a04-text/A04Text";
import styles from "./B02Footer.module.scss";

const B02Footer: React.FC = () => {
  return (
    <div className={styles.B02Footer}>
      <A04Text text="Footer content" />
    </div>
  );
};

export default B02Footer;
