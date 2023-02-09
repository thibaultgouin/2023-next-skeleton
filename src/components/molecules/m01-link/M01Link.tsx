import Link from "next/link";
import classNames from "clsx";
import A04Text from "../../atoms/a04-text/A04Text";
import styles from "./M01Link.module.scss";

export interface M01LinkProps {
  className?: string | false;
  href: string;
  text: string;
}

const M01Link = (props: M01LinkProps) => {
  return (
    <Link
      className={classNames(styles.M01Link, props.className)}
      href={props.href}
    >
      <A04Text className={styles.text} tag="span" text={props.text} />
    </Link>
  );
};

export default M01Link;
