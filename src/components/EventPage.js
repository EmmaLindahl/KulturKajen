//TO DO
// 7. Make an eventcard clickable -> for more information
// 1. Refine fetch & put correct information on ChosenCards
// 2. Why doesn't the adresses work?
// 5. Insert and animate logo

//Last
// Create search field
// Create date search field

import EventStyle from "./EventStyle.css";
import React, { useState, useEffect } from "react";
import InfoCard from "./InfoCard";

function EventPage(props) {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const date = new Date(dateString);
    return date.toLocaleDateString("sv-SE", options);
  };

  const formatTime = (timeString) => {
    const options = { hour: "2-digit", minute: "2-digit" };
    const time = new Date(timeString);
    return time.toLocaleTimeString("sv-SE", options);
  };

  const todayFiveArray = props.activities.slice(0, 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivityIndex(
        (prevIndex) => (prevIndex + 1) % todayFiveArray.length
      );
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const [showInfoCard, setShowInfoCard] = useState(false);
  // function toggleInfoCard() {
  //   setShowInfoCard(!showInfoCard);
  // }
  function toggleInfoCard(index) {
    setSelectedActivityIndex(index === selectedActivityIndex ? null : index);
  }

  const [selectedActivityIndex, setSelectedActivityIndex] = useState(null);

  return (
    <>
      <main className="headerContainer">
        <div className="header">
          <h1>KulturKajen </h1>
          <p>Skepp O'hoj! Dags för Skoj!</p>
        </div>
      </main>
      <main className="chosenCardsContainer">
        <section className="chosenCards">
          <div className="kostnadsfri">
            <img className="chosenImg" src="tram.jpg" />
            <div className="kostnadsfriText">
              <h1>{props.activities[3].title}</h1> <br />
              <br />
              <div
                dangerouslySetInnerHTML={{
                  __html: props.activities[3].description,
                }}
              />
            </div>
          </div>
          <div className="other">
            <div className="idag">
              <p>{todayFiveArray[currentActivityIndex].title}</p>
            </div>
            <div className="barn">
              <img
                className="chosenImg"
                src="kids.jpg"
                alt="4 kids lining up, wearing clothes for rain"
              />
              {props.activities[9].title}
            </div>
          </div>
        </section>
      </main>
      <main className="eventsContainer">
        {props.activities.map((activity) => {
          return (
            <>
              <React.Fragment key={activity.id}>
                <main
                  className="eventCard"
                  onClick={() => toggleInfoCard(activity.id)}
                >
                  {selectedActivityIndex === activity.id && (
                    <div className="overlay">
                      <InfoCard />
                    </div>
                  )}
                  <section>
                    <div className="activityTitle">
                      {activity.image ? (
                        <>
                          <img
                            className="cardImage"
                            src={`${activity.image.host}${activity.image.path}`}
                            alt="Activity Image"
                          />
                        </>
                      ) : (
                        <img
                          className="cardImage"
                          src="NoImg.jpg"
                          alt="Default Image"
                        />
                      )}
                      {activity.title}
                    </div>
                    <div className="activityAddress">
                      {/* {activity.unit.addsstreet} <br /> {activity.unit.name} */}
                    </div>
                  </section>
                  <section>
                    <div className="activityDate">
                      <p>
                        Tid: {formatTime(activity.startTime)} <br />
                        Datum: {formatDate(activity.startTime)}
                      </p>
                    </div>
                  </section>
                </main>
              </React.Fragment>
            </>
          );
        })}
      </main>
      {/* <InfoCard /> */}
    </>
  );
}

export default EventPage;
