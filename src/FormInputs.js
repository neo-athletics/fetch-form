import React from "react";

const FormInputs = ({ handleChange, name, email, password }) => {
    return (
        <>
            <label htmlFor="name">Full Name </label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                pattern="[A-Za-z\s]+"
                required
            />

            <label htmlFor="email">Email </label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
                required
            />

            <label htmlFor="password">Password </label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
            />
        </>
    );
};

export default FormInputs;
