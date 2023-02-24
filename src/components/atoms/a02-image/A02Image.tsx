import Image from "next/image";
import classNames from "clsx";
import { useWindowSize } from "react-use";
import { MediaQueries } from "../../../config/sizes";
import styles from "./A02Image.module.scss";
import { forwardRef, Ref } from "react";

export interface A02ImageProps {
  className?: string | null;
  src: string;
  mobileSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

const A02Image = forwardRef(
  (props: A02ImageProps, ref: Ref<HTMLImageElement>) => {
    const { width } = useWindowSize();
    const isMobile: boolean = width <= MediaQueries.MQ_768;

    return (
      <Image
        ref={ref}
        className={classNames(styles.A02Image, props.className)}
        src={isMobile && props.mobileSrc ? props.mobileSrc : props.src}
        alt={props.alt ? props.alt : "image"}
        width={props.width}
        height={props.height}
        fill={props.fill}
        sizes={props.sizes}
        priority={props.priority}
        quality={100}
      />
    );
  }
);

A02Image.displayName = "A02Image";

export default A02Image;
