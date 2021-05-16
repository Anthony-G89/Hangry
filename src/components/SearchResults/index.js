import React from "react";
import "./style.css";

function searchResults ({projectInfo}) {
    return (
        <div className={"col-lg-3 searchResults"}>
           {
               projectInfo.map((detail , index) =>(
                   <li key={index} className={"resultInfo"}>{detail.Description}<hr></hr></li>
                   
               ))
           }

        </div>
    )
};

export default searchResults;