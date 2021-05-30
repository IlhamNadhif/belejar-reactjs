import React from "react";
import { Card } from "react-bootstrap";
import "./YouTubeComp.css";

const YouTubeComp = (props) => {
  return (
    <Card className="cont" style={{ width: "18rem" }}>
      <Card.Img
        className="image"
        variant="top"
        src="https://www.ilmubahasainggris.com/wp-content/uploads/2017/03/NGC.jpg"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <p className="duration">{props.time}</p>
         {props.desc}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

YouTubeComp.defaultProps = {
  time: "0.00",
  title: "Tidak ada",
  desc: "Tidak ada desc"
};

export default YouTubeComp;
