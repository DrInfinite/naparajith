import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export function H1(props: HeadingProps) {
  return (
    <h1
      {...props}
      className={cn("text-5xl font-extrabold text-foreground", props.className)}
    >
      {props.children}
    </h1>
  );
}

export function H2(props: HeadingProps) {
  return (
    <h2
      {...props}
      className={cn("text-4xl font-bold text-foreground", props.className)}
    >
      {props.children}
    </h2>
  );
}

export function H3(props: HeadingProps) {
  return (
    <h3
      {...props}
      className={cn("text-3xl font-bold text-foreground", props.className)}
    >
      {props.children}
    </h3>
  );
}

export function H4(props: HeadingProps) {
  return (
    <h4
      {...props}
      className={cn("text-2xl font-bold text-foreground", props.className)}
    >
      {props.children}
    </h4>
  );
}

export function H5(props: HeadingProps) {
  return (
    <h5
      {...props}
      className={cn("text-xl font-bold text-foreground", props.className)}
    >
      {props.children}
    </h5>
  );
}
export function H6(props: HeadingProps) {
  return (
    <h6
      {...props}
      className={cn("text-lg font-bold text-foreground", props.className)}
    >
      {props.children}
    </h6>
  );
}
