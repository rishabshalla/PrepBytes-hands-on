import React from "react";
import Functional from "./Functional";
import style from "./style.module.css";

export const cli = () => {
  return <h1>Hwwwwwww</h1>;
};
export const Hello = () => {
  return (
    <>
      <h1 className={style.head}>
        Styling using Functional and Class Component
      </h1>
      <div id={style.main}>
        <span id={style.left} onClick={cli()}>
          To see styling in functional component
        </span>
        <span id={style.right}>To see styling in class component</span>
      </div>
    </>
  );
};
