import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img
        height="200"
        width="100"
        src={
          "https://avatars.dicebear.com/v2/avataaars/" +
          props.username +
          ".svg?options[mood][]=happy"
        }
      />
      <span>
        <h2>{props.name}</h2>
      </span>
      <div>
        <b>Email: </b> {props.email}
      </div>
      <div>
        <b>Phone: </b> {props.tel}
      </div>
      <div>
        <b>Comapny: </b> {props.company}
      </div>
      <div>
        <b>Website: </b> {props.website}
      </div>
      <div>
        <b>Address: </b>
        {props.street + " " + props.suite + " " + props.city + " " + props.zip}
      </div>
    </div>
  );
}

export default Card;
