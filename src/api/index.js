import axios from "axios";

// api
const url = "https://covid19.mathdro.id/api";

export const fetchData = async() => {
    try {
        // fetching data from api
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios.get(url);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
};