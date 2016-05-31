import React from 'react';
import ReactDOM from 'react-dom';
import PentaBox from './components/PentaBox';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Link, browserHistory, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store';
import * as actions from './actions/PentaFeed';
import { bindActionCreators } from 'redux';

injectTapEventPlugin();

// function dispatchers(dispatch){
//   return bindActionCreators(actions, dispatch)
// }
// export default connect(state => {
//   return {
//     state: state,
//     dispatchers: dispatchers
//   };
// })(
export default class pentabox extends React.Component {
  render() {
    return (<PentaBox url={"http://localhost:3000/api/comments"} pollInterval={2000}/>)
  }
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/feed" component={pentabox}/>
      <Redirect from="/" to="feed" />
    </Router>
  </Provider>, document.getElementById('root'));
