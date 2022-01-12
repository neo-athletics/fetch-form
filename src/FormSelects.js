import React from "react";
import PropTypes from "prop-types";

const FormSelects = ({
    handleChange,
    states,
    occupations,
    state,
    occupation,
}) => {
    return (
        <>
            <label htmlFor="occupation">Occupation</label>
            <select
                name="occupation"
                id="occupation"
                value={occupation}
                onChange={handleChange}
                required
            >
                {/* get occupation data from endpoint */}
                <option value="">please select</option>
                {occupations &&
                    occupations.map((occupation) => (
                        <option key={occupation} value={occupation}>
                            {occupation}
                        </option>
                    ))}
            </select>

            <label htmlFor="state">State</label>
            <select
                name="state"
                id="state"
                value={state}
                onChange={handleChange}
                required
            >
                {/* get state data from endpoint */}
                <option value="">please select</option>
                {states &&
                    states.map((state) => (
                        <option key={state.abbreviation} value={state.name}>
                            {state.abbreviation}
                        </option>
                    ))}
            </select>
        </>
    );
};

FormSelects.propTypes = {
    handleChange: PropTypes.func.isRequired,
    states: PropTypes.arrayOf(PropTypes.object).isRequired,
    occupations: PropTypes.arrayOf(PropTypes.string).isRequired,
    state: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
};

export default FormSelects;
