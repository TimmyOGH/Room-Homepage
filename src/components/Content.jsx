import React from "react";
import Svg from "./Svg";

function Content(props) {
    const contentSliderStyles = props.isTablet ? { translate: `${-100 * props.index}%` } : { transform: `translateY(${-100 * props.index}%)` }

    return (
        <div className={props.className} style={contentSliderStyles}>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <button className="shopnow_btn">
                SHOP NOW
                <Svg
                    width="40"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                    d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                    fill="#000"
                    fillRule="nonzero"
                />
            </button>
        </div>
    );
}

export default Content;