import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);
