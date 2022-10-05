import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import GoingtoList from "../components/goingto/GoingtoList";

function GoingToPage() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const responseId = await axios.get(
      "http://localhost:5000/api/get/users-events/1"
    );
    setData(responseId.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <h2>Events you are going to</h2>
      <GoingtoList events={data} />
    </div>
  );
}
export default GoingToPage;
