import React, { useEffect, useState } from "react";
import fetchData from "./fetchData";
import axios from "axios";
import FormInputs from "./FormInputs";
import FormSelects from "./FormSelects";

const Form = ({ setModal }) => {
    let [occupations, setOccupations] = useState([]);
    let [states, setStates] = useState([]);

    let [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        occupation: "",
        state: "",
    });

    useEffect(() => {
        fetchData(setStates, setOccupations);
    }, []);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    let displayModal = () => {
        setModal(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userData);

        const res = await axios.post(
            "https://frontend-take-home.fetchrewards.com/form",
            userData
        );
        const { status } = await res;

        if (status === 200) displayModal();

        console.log(await res, status);

        setUserData({
            name: "",
            email: "",
            password: "",
            occupation: "",
            state: "",
        });
    };

    const { name, email, password, occupation, state } = userData;

    return (
        <>
            <form action="" method="post" onSubmit={handleSubmit}>
                <FormInputs
                    handleChange={handleChange}
                    name={name}
                    email={email}
                    password={password}
                />
                <FormSelects
                    handleChange={handleChange}
                    states={states}
                    occupations={occupations}
                    state={state}
                    occupation={occupation}
                />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default Form;
