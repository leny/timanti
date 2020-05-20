/* leny/timanti
 *
 * /src/components/tools/tools.js - Tools Component
 *
 * coded by leny@BeCode
 * started at 20/05/2020
 */

import React from "react";
import PropTypes from "prop-types";

import {NBSP} from "../../core/constants";

import Button from "./button";

const Tools = ({running, onStartPause, onReset, onPlus, onMinus}) => (
    <div className={""}>
        <Button
            label={"-"}
            title={"Remove one minute"}
            disabled={running}
            onClick={onMinus}
        />
        {NBSP}
        <Button label={"reset"} disabled={running} onClick={onReset} />
        {NBSP}
        <Button
            label={running ? "pause" : "start"}
            onClick={onStartPause}
            title={`${running ? "Pause" : "Start"} the timer`}
        />
        {NBSP}
        <Button
            label={"+"}
            title={"Add one minute"}
            disabled={running}
            onClick={onPlus}
        />
    </div>
);

Tools.propTypes = {
    running: PropTypes.bool,
    onStartPause: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onPlus: PropTypes.func.isRequired,
    onMinus: PropTypes.func.isRequired,
};

export default Tools;
