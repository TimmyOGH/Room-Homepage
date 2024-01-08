import React from "react";

function Svg(props) {
    return <svg width={props.width} height={props.height} xmlns={props.xmlns}><path d={props.d} stroke={props.stroke} fill={props.fill} fillRule={props.fillRule} opacity={props.opacity} /></svg>;
}

export default Svg;