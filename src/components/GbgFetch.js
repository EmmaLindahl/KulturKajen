//Make API-fetch to get Event-information here
//(Doesn't work right now)
import React from "react";
import { useState, useEffect } from "react";
import EventPage from "./EventPage";

function GbgFetch() {
  const [gbgResult, setGbgResult] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGbgResult(data.content);
      })
      .catch((error) => console.error(error));
  }, []);

  return <>{gbgResult.length > 0 && <EventPage activities={gbgResult} />}</>;
}

export default GbgFetch;
