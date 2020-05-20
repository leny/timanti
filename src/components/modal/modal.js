/* leny/timanti
 *
 * /src/components/modal/modal.js - Modal Component
 *
 * coded by leny@BeCode
 * started at 20/05/2020
 */

import React from "react";
import PropTypes from "prop-types";
import {createPortal} from "react-dom";

import useTimer from "../../core/hooks/use-timer";

import Button from "../tools/button";
import Display from "../display/display";

import {NBSP, PAUSE_DURATION} from "../../core/constants";

const containerStyles = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.5)",
};

const Modal = ({show = false, onClose, onRestart}) => {
    if (!show) {
        return null;
    }

    const [{running, seconds}, {setRunning}] = useTimer(
        PAUSE_DURATION,
        true,
        onRestart,
    );

    const stopThen = next => () => {
        setRunning(false);
        next();
    };

    return createPortal(
        <div style={containerStyles}>
            <div className={"box"}>
                <h4>{"It's over!"}</h4>
                <p>{"Please, take a short break."}</p>
                <p>
                    {
                        "When the pause timer will be over, a new session will start."
                    }
                </p>
                <Display seconds={seconds} running={running} />
                <div className={"is-flex"}>
                    <Button label={"Stop"} onClick={stopThen(onClose)} />
                    {NBSP}
                    <Button label={"Restart"} onClick={stopThen(onRestart)} />
                </div>
            </div>
        </div>,
        document.querySelector("#modals"),
    );
};

Modal.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onRestart: PropTypes.func.isRequired,
};

export default Modal;
