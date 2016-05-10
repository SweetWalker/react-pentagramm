import React, { Component } from 'react';
import marked from 'marked';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


export default class PentaMessage extends Component {
  rawMarkup() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }

  onClickDeleteHandler(evt){
    evt.preventDefault();
    var messageId = this.props.messageId;
    this.props.onDelete(messageId);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
          <RaisedButton label="Delete" primary={true} onClick={this.onClickDeleteHandler.bind(this)}/>
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
        <img src={this.props.photo} alt="" className="img-responsive"/>
      </div>
      </MuiThemeProvider>
    );
  }
}
