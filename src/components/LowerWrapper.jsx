import React from "react";
import Image from "./Image";

function LowerWrapper() {
    return (
        <div className="lower_wrapper">
            <div className="lower_img_wrapper_one">
                <Image
                    src="./images/image-about-dark.jpg"
                    alt="about-dark"
                />
            </div>
            <div className="lower_content_wrapper">
                <p>ABOUT OUR FURNITURE</p>
                <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
            <div className="lower_img_wrapper_two">
                <Image
                    src="./images/image-about-light.jpg"
                    alt="about-light"
                />
            </div>
        </div>
    );
}

export default LowerWrapper;