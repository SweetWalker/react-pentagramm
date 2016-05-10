import React from 'react';
import ReactDOM from 'react-dom';
import PentaBox from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();
ReactDOM.render(<PentaBox url={"http://localhost:3000/api/comments"} pollInterval={2000}/>, document.getElementById('root'));
