/* leny/timanti
 *
 * /src/components/pomodoro.js - Container for App
 *
 * coded by leny@BeCode
 * started at 20/05/2020
 */

import React, {useState, useCallback} from "react";

import {SESSION_DURATION} from "../core/constants";

import Display from "./display/display";
import Tools from "./tools/tools";

const Pomodoro = () => {
    const [seconds, setSeconds] = useState(SESSION_DURATION);
    const [running] = useState(false);

    const handleMinus = useCallback(
        () => setSeconds(Math.max(seconds - 60, 0)),
        [seconds, setSeconds],
    );
    const handlePlus = useCallback(() => setSeconds(seconds + 60), [
        seconds,
        setSeconds,
    ]);
    const handleStartPause = () => console.warn("handleStartPause");
    const handleReset = useCallback(() => setSeconds(SESSION_DURATION), [
        setSeconds,
    ]);

    return (
        <div className={["columns", "is-mobile", "is-centered"].join(" ")}>
            <div className={["column", "is-half"].join(" ")}>
                <Display seconds={seconds} running={running} />
                <Tools
                    running={running}
                    onMinus={handleMinus}
                    onPlus={handlePlus}
                    onStartPause={handleStartPause}
                    onReset={handleReset}
                />
            </div>
        </div>
    );
};
export default Pomodoro;
