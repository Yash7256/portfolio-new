import type { ImgHTMLAttributes } from "react";

type ImgProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
};

export default function Img({ fill, className, ...props }: ImgProps) {
  const classes = fill
    ? `absolute inset-0 h-full w-full ${className ?? ""}`
    : className;

  return <img {...props} className={classes} />;
}
