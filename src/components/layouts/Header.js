import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { grey800 } from 'material-ui/styles/colors';

const PentaHeader = {
  fontFamily: 'Billabong',
  palette: {
    primary1Color: grey800,
    primary2Color: grey800
  },
};
export default class AppHeader extends Component {
  render(){
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(PentaHeader)}>
        <div className="appHeader">
          <AppBar className="AppBar" title="Pentagramm"></AppBar>
        </div>
      </MuiThemeProvider>
    )
  }
}
