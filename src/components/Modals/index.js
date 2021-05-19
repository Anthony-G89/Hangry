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
                            <p className={"modalText"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod auctor semper. Ut gravida mi quis scelerisque ornare. Integer tristique feugiat convallis. Integer rhoncus gravida turpis, et euismod enim volutpat sed. Aliquam interdum cursus lobortis. In mattis, erat in hendrerit sagittis, odio mi vulputate ante, id feugiat mauris turpis a quam. Mauris nec neque nec orci scelerisque lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In accumsan urna eu urna pellentesque, ac vulputate metus elementum. Phasellus quis dictum orci. Duis placerat vulputate dui et cursus.

                                Vestibulum in tellus ac sapien commodo imperdiet vitae at lorem. Mauris pharetra lacus tortor, vitae semper arcu bibendum ac. Morbi convallis viverra odio, non ornare leo sollicitudin sit amet. Aenean tincidunt lacinia nulla et posuere. Maecenas rhoncus arcu in odio scelerisque, ut consectetur tellus molestie. Nam lorem justo, dapibus a malesuada ut, consequat vel risus. Cras commodo ut diam posuere euismod. Vestibulum in odio sodales, posuere diam quis, elementum mi. Vestibulum condimentum faucibus velit sit amet gravida. Vivamus condimentum accumsan risus, id lobortis lorem molestie sit amet. Donec justo eros, luctus at pulvinar vitae, gravida et dui. Vivamus eget nisi neque. Donec dictum sem a dapibus cursus.

                                Duis aliquet facilisis dolor, vitae aliquam ante varius sit amet. Sed non ultrices leo, facilisis venenatis massa. Fusce egestas efficitur mollis. Duis tincidunt quis nulla finibus feugiat. Donec efficitur, eros varius lacinia vulputate, sem orci bibendum nibh, vitae eleifend diam nisi commodo tortor. Morbi sit amet luctus nisl. Morbi malesuada, purus eget dapibus porttitor, mauris turpis vestibulum neque, eu commodo dolor mauris hendrerit dui. Etiam blandit urna fringilla pulvinar elementum.

                                Sed viverra, nisl a pulvinar consectetur, nisi ligula porttitor sapien, vel tincidunt metus eros non ex. Suspendisse quis placerat massa. Etiam id sapien id felis ornare pharetra. Suspendisse feugiat vehicula egestas. Mauris felis ipsum, sollicitudin sit amet est ac, fermentum efficitur elit. Nunc blandit ligula eget augue ornare, quis viverra augue tempor. Vestibulum condimentum tortor vulputate, sagittis leo id, vestibulum elit. Nulla facilisi. Morbi in ante vel quam tempor porttitor. Morbi euismod, turpis quis imperdiet mollis, massa justo vestibulum nulla, et vehicula massa felis et justo. Nulla lorem ipsum, efficitur quis eleifend quis, lobortis non magna.

                                Nunc et magna quis elit suscipit elementum at et diam. In purus quam, egestas eu ultrices sed, sodales non odio. Nullam aliquet lacinia enim ac gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ullamcorper sem nec tortor semper consectetur. Aenean egestas mi ac eros aliquet, eget mollis ipsum bibendum. Fusce sed convallis ante.

                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas non tincidunt nulla, vel congue ipsum. Nam eu purus volutpat, volutpat lacus eu, euismod libero. Ut nec diam eu enim venenatis varius ac a erat. Nunc vel odio fermentum, interdum nisl sit amet, elementum dolor. Maecenas suscipit pellentesque mattis. Duis consectetur metus luctus, tincidunt felis a, ultricies sapien. Nam aliquet placerat efficitur. Proin egestas lacus et augue dictum, at finibus odio tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus at odio pulvinar, accumsan orci vel, faucibus quam. Donec in mi vel eros maximus vulputate id rhoncus nisl.

                                Mauris volutpat dictum mattis. Proin at nunc at nunc gravida pharetra. Mauris urna lectus, euismod at justo aliquet, mollis dapibus orci. Integer consectetur dui vel nibh lobortis, a dignissim felis sodales. Aliquam et dui sed nunc feugiat ultrices sed tincidunt metus. Nunc et elit non elit malesuada hendrerit. Integer maximus rhoncus mi, non vestibulum diam ultrices at. Sed tellus velit, aliquam vitae maximus eu, vehicula in mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce turpis leo, tincidunt nec mattis at, iaculis nec libero. Nunc varius malesuada diam eu ultricies. Nam nec lib </p>
                        </div>



                        <div className="modalFooter">
                            <h3 className={"linksTitle"}>Modal Footer</h3>
                        </div>
                    </div>
                </div>

            </div>
                : null}


        </div>

    )
};


export default Modals;