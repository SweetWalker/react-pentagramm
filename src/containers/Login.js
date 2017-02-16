import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridList from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import '../styles/stylus/containers/login.styl';

export default class PentaMessage extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <GridList className="login-grid-list">
          <div className="login-left-side">
          </div>
          <div className="login-right-side">
            <Paper zDepth={1} >
              <p className="login-title">
                Welcome to Pentagramm <br /> Burn in hell with your Friends ;)
              </p>
              <h1>Login</h1>
              <h1>Password</h1>
            </Paper>
          </div>
        </GridList>
      </MuiThemeProvider>
    );
  }
}
