import React from "react";
import { useState } from "react"
import "./image-slider.css"




export default function ImageSlider(slideUrls) {
    const [slideIndex, setSlideIndex] = useState(0);

    function showNextSlide() {

        setSlideIndex(slideIndex => {
            if (slideIndex === slideUrls.slideUrls.length - 1) {
                return slideIndex = 0;
            } else {
                return slideIndex + 1;
            }
        })
    }

    function showPreviousSlide() {

        setSlideIndex(slideIndex => {
            if (slideIndex === 0) {
                return slideUrls.slideUrls.length - 1;
            } else {
                return slideIndex - 1;
            }
        })

    }

    return (
        <div className="container">
            <div className="image-slider">
                <img src={slideUrls.slideUrls[slideIndex]} alt="" className="image-slider-img" />
                <button className="image-slider-button image-slider-button__left" onClick={showPreviousSlide}>&lt;</button>
                <button className="image-slider-button image-slider-button__right" onClick={showNextSlide}>&gt;</button>
            </div>
        </div>
    )


}

