import classNames from "clsx";
import styles from "./A03Heading.module.scss";

export interface A03HeadingProps {
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
}

const A03Heading = ({ className, tag = "h2", size, text }: A03HeadingProps) => {
  const Tag = tag;
  const sizeClass = size ? size : tag;

  return (
    <Tag
      className={classNames(styles.A03Heading, styles[sizeClass], className)}
    >
      {text}
    </Tag>
  );
};

export default A03Heading;
