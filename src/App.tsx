import { Loading, Header, Footer } from "./components";
import { HomePage, Project, Contact } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Loading>
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
    </Loading>
  );
}

export default App;
