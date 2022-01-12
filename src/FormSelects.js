import React from "react";

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

export default FormSelects;
