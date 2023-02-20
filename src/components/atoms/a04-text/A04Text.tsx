import classNames from "clsx";
import { Ref, forwardRef } from "react";
import styles from "./A04Text.module.scss";

export type TextSize = "copy-1" | "copy-2" | "copy-3";

export interface A04TextProps {
  className?: string;
  tag?: "p" | "span";
  size?: TextSize;
  text: string;
}

const A04Text = forwardRef(
  (
    { className, tag = "p", size = "copy-2", text }: A04TextProps,
    ref: Ref<HTMLParagraphElement>
  ) => {
    const Tag = tag;

    return (
      <Tag
        className={classNames(styles.A04Text, className, styles[size])}
        ref={ref}
      >
        {text}
      </Tag>
    );
  }
);

A04Text.displayName = "A04Text";

export default A04Text;
