import "./App.css";
import React, { useState } from 'react';
import EventPage from "./components/EventPage";
import InfoCard from "./components/InfoCard";
import { useFetch } from './components/Services/useFetch';

function App() {
  const url = 'http://localhost:3001';
  const { data, isPending, error } = useFetch(url);
  const { data:dataKid, isPending:isPendingKid, error: errorKid } = useFetch(url + "?" + "searchTerm=barn" + "&" + "size=3");

  return (
    <>
    <div>
    <main className="headerContainer">
        <div className="header">
          <h1>
            - OBS! Work in progress! <br /> KulturKajen{" "}
          </h1>
          <p>Skepp O'hoj! Dags för Skoj!</p>
        </div>
      </main>
    </div>
      {isPending || isPendingKid && <div>Loading....</div>}
      {error || errorKid && <div>{error}</div>}
      {data && dataKid && <EventPage activities={data.content} activitiesKid={dataKid.content} ></EventPage>}
    </>
  );
}

export default App;