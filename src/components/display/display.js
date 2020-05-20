/* leny/timanti
 *
 * /src/components/display/display.js - Display Component
 *
 * coded by leny@BeCode
 * started at 20/05/2020
 */

import React from "react";
import PropTypes from "prop-types";

import Cyphers from "./cyphers";

const styles = {
    fontSize: "10rem",
    textAlign: "center",
};

const Display = ({seconds, running = false}) => {
    let separator = ":";

    if (running) {
        separator = seconds % 2 ? ":" : "";
    }

    return (
        <div style={styles}>
            <Cyphers value={Math.floor(seconds / 60)} />
            <span>{separator}</span>
            <Cyphers value={seconds % 60} />
        </div>
    );
};

Display.propTypes = {
    seconds: PropTypes.number.isRequired,
    running: PropTypes.bool,
};

export default Display;
