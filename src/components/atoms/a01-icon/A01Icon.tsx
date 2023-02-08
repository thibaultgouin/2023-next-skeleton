import classNames from "clsx";
import { IconType } from "react-icons/lib/cjs";
import styles from "./A01Icon.module.scss";

export interface A01IconProps {
  className?: string;
  icon: IconType;
}

const A01Icon = ({ className, icon: Icon }: A01IconProps) => {
  return <Icon className={classNames(styles.A01Icon, className)} />;
};

export default A01Icon;
