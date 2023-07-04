import InfoStyle from "./InfoStyle.css";

function InfoCard(props) {
  //   console.log(activities || "");
  //
  return (
    <>
      <div className="main">
        <h3>Work in progress!</h3>
        <p>This is not displayed properly yet.</p>
        {/* <h1>{props.activities[9].title}</h1> */}
        <br />
        <h3>Info for developer:</h3>
        <p>
          {props.activities
            ? `props is working: ${props.activities[9].title}`
            : "error: The props-function is not working"}
        </p>
      </div>
    </>
  );
}
export default InfoCard;
