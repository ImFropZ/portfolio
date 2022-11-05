import React, { useState } from "react";
import classes from "./Loading.module.css";

type LoadingProps = {
  children: React.ReactNode;
};

function Loading(props: LoadingProps) {
  const [isLoading, setLoading] = useState(false);

  if (!sessionStorage.getItem("firstLoad")) {
    sessionStorage.setItem("firstLoad", "1");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }

  return (
    <>
      {isLoading ? (
        <div className={classes.loadWarpper}>
          <span>L</span>
          <span>I</span>
          <span>M</span>
          <span>T</span>
          <span>A</span>
          <span>N</span>
          <span>G</span>
          <span>M</span>
          <span>E</span>
          <span>N</span>
          <span>G</span>
        </div>
      ) : (
        props.children
      )}
    </>
  );
}

export default Loading;
