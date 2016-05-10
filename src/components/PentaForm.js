import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class PentaForm extends Component {
  constructor(props){
    super(props);
    this.state = {author: '', text: ''};
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }
  handleTextChange(e) {
    this.setState({text: e.target.value});
  }
  handlePhotoChange(e) {
    this.setState({photo: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    var photo = this.state.photo;
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text, photo: photo});
    this.setState({author: '', text: '', photo: ''});
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="pentaForm">
          <form className="penta-form" onSubmit={this.handleSubmit.bind(this)}>
            <TextField
              hintText="Name"
              floatingLabelText="Your Name"
              type="text"
              value={this.state.author}
              onChange={this.handleAuthorChange.bind(this)}
            />
            <TextField
              hintText="Message"
              floatingLabelText="Your Penta Message"
              type="text"
              value={this.state.text}
              onChange={this.handleTextChange.bind(this)}
            />
            <TextField
              type="text"
              hintText="Photo"
              floatingLabelText="Your Penta Photo"
              value={this.state.photo}
              onChange={this.handlePhotoChange.bind(this)}
            />
            <RaisedButton label="Create" primary={true} type="submit" value="Post"/>
          </form>
        </div>
      </MuiThemeProvider>
    )
  }
}
