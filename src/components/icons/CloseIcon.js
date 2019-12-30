import React from "react";

const CloseIcon = ({
    className = "close",
    enableBackground="new 0 0 100 100",
    style = {},
    viewBox="0 0 100 100",
    width = "24px",
    xmlnsXlink="http://www.w3.org/1999/xlink"
}) => (
    <svg
        className={className}
        enableBackground={enableBackground}
        style={style}
        viewBox={viewBox}
        width={width}
        xmlnsXlink={xmlnsXlink}
    >
        <polygon points="77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2 51.5,51.1 79.6,23 "/>
    </svg>
);

export default CloseIcon;
