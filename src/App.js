import React from "react";
import Jumbotron from "./components/Jumbotron";
import SearchContainer from "./components/SearchContainer";
import SearchResults from "./components/SearchResults";
import GoogleMap from "./components/GoogleMaps";
import project from "../src/projects-Detail.json";

function App() {
  return (
    <div >
      < Jumbotron />
      < SearchContainer />
      < SearchResults 
        projectInfo={project}
      />
      <GoogleMap />

    </div>
  );
}

export default App;
