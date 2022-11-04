import { useContext } from "react";
import projectContext from "../context/projectContext";

function useProjectContext() {
  return useContext(projectContext);
}

export default useProjectContext;
