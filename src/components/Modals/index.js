/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./style.css";



function Modals({ showModal, closeModal }) {


    return (
        <div>
            {showModal ? <div className="modal-wrapper">
                <div onClick={closeModal} className="modal-background">
                    <div className="modal-box">

                        <div className="modalHeader"><h1>Modal Header</h1></div>
                        <div className="closeIcon"><span onClick={closeModal} className="closeBtn">&times;</span></div>

                        <div className="modalContent">
                            <p className={"modalText"}> Description</p>
                        </div>

                        {/* <div className={"languageContainer"}>
                            <h3 className={"usedLanguages"}>Languages Used:</h3>
                            <div className={"iconContainer"}>
                                {
                                    currentProject.Languages.map((language, index) => (
                                        // console.log(language)
                                        <img key={index} src={`${process.env.PUBLIC_URL}${language}`} className={"languagesIcon"} alt={language} />
                                    ))
                                }
                            </div>
                        </div> */}

                        <div className="modalFooter">
                            <h3 className={"linksTitle"}>Modal Footer</h3>
                            {/* <a className={"links"} href={currentProject.GitHubLink} target={"_blank"}>GitHub Repository </a>
                            <br />
                            <a className={"links"} href={currentProject.LinkToApplication} target={"_blank"}>Link To Application</a> */}
                        </div>
                    </div>
                </div>

            </div>
                : null}


        </div>

    )
};


export default Modals;