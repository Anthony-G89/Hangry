import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import SearchContainer from "./components/SearchContainer";
import SearchResults from "./components/SearchResults";
import GoogleMap from "./components/GoogleMaps";
import Modals from "./components/Modals";
import project from "../src/projects-Detail.json";







function App() {

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  const openModal =() => {
    setShowModal(true)
  };




  return (
    <div >
      < Jumbotron />
      < SearchContainer />
      < SearchResults 
        projectInfo={project}
        ModalWillOpen={openModal} 

      />
      <GoogleMap />
      < Modals 
      showModal={showModal} 
      closeModal={closeModal}
      />

    </div>
  );
}

export default App;
