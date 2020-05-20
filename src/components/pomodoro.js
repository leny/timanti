/* leny/timanti
 *
 * /src/components/pomodoro.js - Container for App
 *
 * coded by leny@BeCode
 * started at 20/05/2020
 */

import React, {useCallback} from "react";

import {SESSION_DURATION} from "../core/constants";

import useTimer from "../core/hooks/use-timer";

import Display from "./display/display";
import Tools from "./tools/tools";

const Pomodoro = () => {
    const [{seconds, running}, {setSeconds, setRunning}] = useTimer(
        SESSION_DURATION,
        false,
        () => {
            console.warn("Timer is finished!");
        },
    );

    const handleMinus = useCallback(
        () => setSeconds(Math.max(seconds - 60, 0)),
        [seconds, setSeconds],
    );
    const handlePlus = useCallback(() => setSeconds(seconds + 60), [
        seconds,
        setSeconds,
    ]);
    const handleStartPause = useCallback(() => setRunning(!running), [
        running,
        setRunning,
    ]);
    const handleReset = useCallback(() => setSeconds(SESSION_DURATION), [
        setSeconds,
    ]);

    return (
        <div className={["columns", "is-mobile", "is-centered"].join(" ")}>
            <div className={["column", "is-half"].join(" ")}>
                <Display seconds={seconds} />
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
