import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PentaBox from './containers/PentaBox';
import Login from './containers/Login';
import store from './stores/pentabox/store';

injectTapEventPlugin();

export default class pentabox extends React.Component {
  render() {
    return (<PentaBox url={"http://localhost:3000/api/comments"} pollInterval={2000}/>)
  }
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/feed" component={pentabox}/>
      <Route path="/login" component={Login}/>
      <Redirect from="/" to="feed" />
    </Router>
  </Provider>, document.getElementById('root')
);
