import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import EventsList from "../components/events/EventsList";
import Filter from "../components/events/filter/Filter";

function EventsPage(props) {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/get/events`
        );
        setData(response.data);
    };

    const dateOrdering = async () => {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/get/events/date`
        );
        setData(response.data);
    };

    const cityOrdering = async () => {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/get/events/city`
        );
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <h2>Events to come</h2>
            <Filter onDate={dateOrdering} onCity={cityOrdering}></Filter>
            <EventsList events={data} userId={props.userId} />
        </div>
    );
}
export default EventsPage;
