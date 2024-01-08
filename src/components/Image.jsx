import React from "react";

function Image(props) {
    return <img className={props.className} style={{ translate: `${-100 * props.index}%` }} src={props.src} alt={props.alt} />
}

export default Image;