import React from "react";
import Jumbotron from "./components/Jumbotron";
import SearchContainer from "./components/SearchContainer";
import SearchResults from "./components/SearchResults";
import project from "../src/projects-Detail.json";

function App() {
  return (
    <div >
      < Jumbotron />
      < SearchContainer />
      < SearchResults 
        projectInfo={project}
      />

    </div>
  );
}

export default App;
