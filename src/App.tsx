import { Loading, Header, Footer } from "./components";
import { HomePage, Project, Contact } from "./pages";
import { Routes, Route } from "react-router-dom";
import { ProjectContextProvider } from "./context/ProjectContext";

function App() {
  return (
    <Loading>
      <ProjectContextProvider>
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="*" element={<HomePage />}></Route>
                  <Route
                    path="/project/:projectName"
                    element={<Project />}
                  ></Route>
                </Routes>
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </ProjectContextProvider>
    </Loading>
  );
}

export default App;
