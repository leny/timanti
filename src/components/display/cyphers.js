/* leny/timanti
 *
 * /src/components/display/cyphers.js - Display Component: Cyphers
 *
 * coded by leny@BeCode
 * started at 20/05/2020
 */

import React from "react";
import PropTypes from "prop-types";

const Cyphers = ({value}) => <span>{`${value}`.padStart(2, "0")}</span>;

Cyphers.propTypes = {
    value: PropTypes.number.isRequired,
};

export default Cyphers;
