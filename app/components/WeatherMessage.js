import React from 'react';

export default (props) => {
  var {temp, city} = props;
  return(
    <h3>It is {temp} degrees in {city}.</h3>
  )
};
