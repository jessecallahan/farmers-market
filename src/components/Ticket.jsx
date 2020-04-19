import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <h3>{props.day}</h3>
      <p><em>{props.location}</em></p>
      <p><em>{props.hours}</em></p>
      <p>Booth - <em>{props.booth}</em></p>
      <hr />
    </React.Fragment>
  );
}

Ticket.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Ticket;