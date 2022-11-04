import React, { useState } from "react";
import classes from "./Loading.module.css";

type LoadingProps = {
  children: React.ReactNode;
};

function Loading(props: LoadingProps) {
  const [isLoad, setLoad] = useState(false);

  if (!sessionStorage.getItem("firstLoad")) {
    sessionStorage.setItem("firstLoad", "1");
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 3100);
  }

  return (
    <>
      {isLoad ? (
        <div className={classes.loadWarpper}>
          <span className={classes.load}>Lim Tangmeng</span>
        </div>
      ) : (
        props.children
      )}
    </>
  );
}

export default Loading;
