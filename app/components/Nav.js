import React from 'react';
import { Link, IndexLink } from 'react-router';

export default (props) => {
  return(
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
    </div>
  );
};
