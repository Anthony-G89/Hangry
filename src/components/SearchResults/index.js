import React from "react";
import "./style.css";

function searchResults({ projectInfo, ModalWillOpen }) {
    return (
        <div className={"col-lg-3 searchResults"}>
            {
                projectInfo.map((detail, index) => (
                    <li key={index} className={"resultInfo"} onClick={() => {ModalWillOpen()}}>{detail.Description}<hr>
                    </hr>
                    </li>

                ))
            }

        </div>
    )
};

export default searchResults;