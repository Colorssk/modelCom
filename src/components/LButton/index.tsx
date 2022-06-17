import "./index.less";
import React from "react";
export default function LButton(props: any) {
  return (
    <button className="LButton-container">{props.children}</button>
  );
}
