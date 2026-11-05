import type { ImgHTMLAttributes } from "react";

type ImgProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
};

export default function Img({
  fill,
  className,
  decoding = "async",
  width,
  height,
  ...props
}: ImgProps) {
  const classes = fill
    ? `absolute inset-0 h-full w-full ${className ?? ""}`
    : className;

  return (
    <img
      decoding={decoding}
      width={width ?? (fill ? 1600 : undefined)}
      height={height ?? (fill ? 1200 : undefined)}
      {...props}
      className={classes}
    />
  );
}
