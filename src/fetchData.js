import axios from "axios";

const fetchData = async (setStates, setOccupations) => {
    let res = await axios.get(
        "https://frontend-take-home.fetchrewards.com/form"
    );
    let { data } = res;
    setStates(data.states);
    setOccupations(data.occupations);
    console.log(data);
};

export default fetchData;
