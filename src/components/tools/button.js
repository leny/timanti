/* leny/timanti
 *
 * /src/components/tools/button.js - Tools Component: Button
 *
 * coded by leny@BeCode
 * started at 20/05/2020
 */

import React from "react";
import PropTypes from "prop-types";

const Button = ({label, title, disabled = false, onClick}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={["button", "is-primary", "is-medium", "is-fullwidth"].join(
            " ",
        )}
        type={"button"}
        title={title || label}>
        {label}
    </button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default Button;
