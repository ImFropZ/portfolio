import { useState } from "react";
import classes from "./ImageContainer.module.css";

type ImageContainerProps = {
  image: Array<string>;
};

function ImageContainer(props: ImageContainerProps) {
  const { image } = props;
  const [page, setPage] = useState(0);

  function changeHandler() {
    setPage((prev) => {
      if (prev < image.length - 1) return prev + 1;
      return 0;
    });
  }

  return (
    <div className={classes.container} onClick={changeHandler}>
      <img src={image[page]} alt="reference" />
    </div>
  );
}

export default ImageContainer;
