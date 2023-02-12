import React from "react";
import { Tag as classes } from "../styles";

interface Props {
  children: React.ReactNode;
}

function Tag({ children }: Props) {
  return (
    <div className={classes.container}>
      <div className={classes.left_side}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes.greater_than_sign}
        >
          <g>
            <path
              className={classes.greater_arrow}
              d="M26 2L4 15L26 28"
              stroke="black"
              strokeWidth="3"
            />
          </g>
        </svg>
      </div>
      <div className={classes.context}>{children}</div>
      <div className={classes.right_side}>
        <svg
          width="13"
          height="30"
          viewBox="0 0 13 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes.dash_sign}
        >
          <g clipPath="url(#clip0_15_9)">
            <path
              className={classes.dash}
              d="M11 1L2 29"
              stroke="black"
              strokeWidth="3"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_9">
              <rect width="13" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes.lesser_than_sign}
        >
          <g>
            <path
              className={classes.lesser_arrow}
              d="M26 2L4 15L26 28"
              stroke="black"
              strokeWidth="3"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Tag;
