import React, { Component } from 'react';
import marked from 'marked';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import MessageService from '../utils/services/message';

export default class PentaMessage extends Component {
  rawMarkup() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }

  render() {
    let { url, message } = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="comment">
          <h2 className="commentAuthor">
            {message.author}
            <RaisedButton label="Delete" primary={true} onClick={ () => MessageService.getInstance().removeMessage(message.id) }/>
          </h2>
          <span dangerouslySetInnerHTML={this.rawMarkup()} />
          <img src={message.photo} alt="" className="img-responsive"/>
        </div>
      </MuiThemeProvider>
    );
  }
}
