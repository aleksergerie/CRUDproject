import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import EventsList from "../components/events/EventsList";

function EventsPage() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get/events");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <h2>Events to come</h2>
      <EventsList events={data} />
    </div>
  );
}
export default EventsPage;
