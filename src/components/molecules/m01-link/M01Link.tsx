import Link from "next/link";
import { Ref, forwardRef } from "react";
import classNames from "clsx";
import A04Text, { TextSize } from "../../atoms/a04-text/A04Text";
import styles from "./M01Link.module.scss";

export interface M01LinkProps {
  className?: string | false;
  href: string;
  text: string;
  size?: TextSize;
}

const M01Link = forwardRef(
  (
    { className, href, text, size = "copy-2" }: M01LinkProps,
    ref: Ref<HTMLAnchorElement>
  ) => {
    return (
      <Link
        ref={ref}
        className={classNames(styles.M01Link, className)}
        href={href}
      >
        <A04Text className={styles.text} tag="span" text={text} size={size} />
      </Link>
    );
  }
);

M01Link.displayName = "M01Link";

export default M01Link;
