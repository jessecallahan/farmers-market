import React from "react";
import PropTypes from "prop-types";

function Produce(props) {
  return (
    <React.Fragment>
      <p><em>{props.month}</em></p>
      <p><em>{props.selection}</em></p>
      <hr />
    </React.Fragment>
  );
}

Produce.propTypes = {
  month: PropTypes.string
};

export default Produce;