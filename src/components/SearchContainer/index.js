/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './style.css'


function searchBar({functionForSearchBtn}) {

   

    return (
        <div className={"col-lg-3 searchContainer"}>
            <input className={"userInput"} type={"text"} autoFocus placeholder={"Enter your city..."} />



            <div className={"selecterContainer"}>
                <select className={"formType"} aria-label={"Default select example"}>
                    <option value={"1"}>Resturants</option>
                    <option value={"2"}>Bars</option>
                    <option value={"3"}>Events</option>
                </select>

                <select className={"distanceType"} aria-label={"Distances"}>
                    <option value={"oneM"}>5 Miles</option>
                    <option value={"twoM"}>10 Miles</option>
                    <option value={"threeM"}>15 Miles</option>
                </select>
            </div>

            <button onClick={functionForSearchBtn} className={"searchBtn"} type={"button"}>Search</button>

        </div>
    )
};

export default searchBar;