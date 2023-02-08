import React from "react";
import A04Text from "../../atoms/a04-text/A04Text";
import styles from "./B01Navigation.module.scss";

const B01Navigation: React.FC = () => {
  return (
    <div className={styles.b01Navigation}>
      <A04Text text="Navigation content" />
    </div>
  );
};

export default B01Navigation;
