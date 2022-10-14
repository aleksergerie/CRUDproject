import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import NotSignedIn from "../components/profile/NotSignedIn";
import GoingtoList from "../components/goingto/GoingtoList";

function GoingToPage(props) {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const responseId = await axios.get(
            `${process.env.REACT_APP_API_URL}/get/users-events/${props.userId}`
        );
        setData(responseId.data);
    };

    useEffect(() => {
        loadData();
    }, []);
    if (data.length == 0) {
        return (
            <div>
                <NotSignedIn />
            </div>
        );
    } else {
        return (
            <div>
                <h2>Events you are going to</h2>
                <GoingtoList events={data} userId={props.userId} />
            </div>
        );
    }
}
export default GoingToPage;
