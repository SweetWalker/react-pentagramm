import React, { Component } from 'react';
import marked from 'marked';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import MessageService from '../../utils/services/message';
import { Card, CardHeader, CardMedia, CardText, CardActions } from 'material-ui/Card';

export default class PentaMessage extends Component {
  rawMarkup() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }

  render() {
    let { url, message } = this.props;
    const styles = {
      root: {
        margin: '20px 0'
      }
    };
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Card style={styles.root}>
          <CardHeader title={message.author} avatar={message.photo}/>
            <CardMedia>
              <img src={message.photo} alt="" className="img-responsive"/>
            </CardMedia>
            <CardText>
              {message.text}
            </CardText>
            <CardActions>
              <FlatButton label="Delete" primary={true} onClick={ () => MessageService.getInstance().removeMessage(message.id) }/>
            </CardActions>
        </Card>
      </MuiThemeProvider>
    );
  }
}
