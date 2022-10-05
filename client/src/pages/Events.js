import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import EventsList from "../components/events/EventsList";
import Filter from "../components/events/filter/Filter";

function EventsPage() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get/events");
    setData(response.data);
  };

  function dateOrdering() {
    const response = axios.get("http://localhost:5000/api/get/events/date");
    setData(response.data);
    console.log(data);
  }

  function cityOrdering() {
    const response = axios.get("http://localhost:5000/api/get/events/city");
    setData(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <h2>Events to come</h2>
      <Filter onDate={dateOrdering} onCity={cityOrdering}></Filter>
      <EventsList events={data} />
    </div>
  );
}
export default EventsPage;
