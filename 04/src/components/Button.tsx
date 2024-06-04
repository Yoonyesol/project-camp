import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames/bind";

type TButtonProps = React.ComponentProps<"button"> & {
  type: "submit" | "reset" | "button";
  disabled?: boolean;
  height?: string;
  width?: string;
  color?: string;
  fontColor?: string;
  children: React.ReactNode;
};

export default function Button(props: TButtonProps) {
  // const { type, name, disabled, children } = props;
  const { children, ...restButtonProps } = props;

  const cx = classNames.bind(styles);
  return (
    <>
      {/* <button
        type={type}
        name={name}
        className={cx("button")}
        disabled={disabled}
      >
        {children}
      </button> */}
      <button
        style={{
          backgroundColor: restButtonProps.color,
          width: restButtonProps.width,
          height: restButtonProps.height,
          color: restButtonProps.fontColor,
        }}
        className={cx("button")}
        {...restButtonProps}
      >
        {children}
      </button>
    </>
  );
}
