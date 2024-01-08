import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Image from "./Image";
import Svg from "./Svg";
import Content from "./Content";
import contents from "../contents";

function UpperWrapper() {
    const [toNFro, setToNFro] = useState(0);
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const heroImages = [
        [
            "./images/desktop-image-hero-1.jpg",
            "./images/desktop-image-hero-2.jpg",
            "./images/desktop-image-hero-3.jpg"
        ],

        [
            "./images/mobile-image-hero-1.jpg",
            "./images/mobile-image-hero-2.jpg",
            "./images/mobile-image-hero-3.jpg"
        ]
    ];
    function handleNextClick() {
        setToNFro(prevVal => prevVal > 1 ? 0 : prevVal += 1);
    }

    function handlePreviousClick() {
        setToNFro(prevVal => prevVal < 1 ? 2 : prevVal -= 1);
    }

    const checkWindowSize = () => {
        if (window.innerWidth < 701) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }

        if (window.innerWidth < 995) {
            setIsTablet(true);
        } else {
            setIsTablet(false);
        }
    };

    useEffect(() => {
        checkWindowSize();
        window.addEventListener("resize", checkWindowSize);
        return () => {
            window.removeEventListener("resize", checkWindowSize);
        };
    }, []);

    const anglesWrapper = (<div className="angles_wrapper">
        <div onClick={handlePreviousClick}>
            <Svg
                width="14"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                d="M13 0L1 12l12 12"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
            />
        </div>
        <div onClick={handleNextClick}>
            <Svg
                width="14"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                d="M1 0l12 12L1 24"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
            />
        </div>
    </div>);

    return (
        <div className="upper_wrapper">
            <div className="upper_nav_img_wrapper">
                <Navbar
                    isMobile={isMobile}
                />
                <div className="upper_img_wrapper">
                    {heroImages[isMobile ? 1 : 0].map((url, index) =>
                        <Image
                            key={index}
                            index={toNFro}
                            className={`${index === toNFro ? "visible" : ""}`}
                            src={url}
                        />)}
                </div>
                {isTablet && anglesWrapper}
            </div>
            <div className="upper_content_wrapper">
                <div className="upper_content">
                    <div className="upper_content_slider">
                        {contents.map((content, index) =>
                            <Content
                                key={index}
                                index={toNFro}
                                className={`${index === toNFro ? "visible" : ""}`}
                                title={content.title}
                                description={content.description}
                                isTablet={isTablet}
                            />
                        )}
                    </div>
                </div>
                {(!isTablet && !isMobile) && anglesWrapper}
            </div>
        </div>
    );
}

export default UpperWrapper;