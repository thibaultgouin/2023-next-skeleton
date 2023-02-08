import classNames from "clsx";
import styles from "./A04Text.module.scss";

export interface A04TextProps {
  className?: string;
  tag?: "p" | "span";
  style?: "copy-1" | "copy-2" | "copy-3";
  text: string;
}

const A04Text = ({
  className,
  tag = "p",
  style = "copy-2",
  text,
}: A04TextProps) => {
  const Tag = tag;
  return (
    <Tag className={classNames(styles.A04Text, className, styles[style])}>
      {text}
    </Tag>
  );
};

export default A04Text;
