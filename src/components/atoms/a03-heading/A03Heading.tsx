import classNames from "clsx";
import { Ref, forwardRef } from "react";
import styles from "./A03Heading.module.scss";

export interface A03HeadingProps {
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
}

const A03Heading = forwardRef(
  (
    { className, tag = "h2", size, text }: A03HeadingProps,
    ref: Ref<HTMLHeadingElement>
  ) => {
    const Tag = tag;
    const sizeClass = size ? size : tag;

    return (
      <Tag
        className={classNames(styles.A03Heading, styles[sizeClass], className)}
        ref={ref}
      >
        {text}
      </Tag>
    );
  }
);

A03Heading.displayName = "A03Heading";

export default A03Heading;
