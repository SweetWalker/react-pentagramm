import React, { Component } from 'react';
import PentaForm from './PentaForm';
import PentaList from './PentaList';
import { connect } from 'react-redux';
import * as actions from '../actions/PentaFeed';
import { bindActionCreators } from 'redux';

export default connect(state => {
  return { state: state };
})(class PentaBox extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }
  // loadCommentsFromServer() {
  //   fetch(this.props.url)
  //   .then(function(response) {
  //     return response.json();
  //   }).then((json) => {
  //     return this.setState({data: json});
  //   });
  // }

  componentDidMount() {
    this.props.dispatch(actions.fetchMessages(this.props.url))
    // this.loadCommentsFromServer();
    // setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
  }
  // handleCommentSubmit(comment) {
  //   $.ajax({
  //     url: this.props.url,
  //     dataType: 'json',
  //     type: 'POST',
  //     data: comment,
  //     success: (data) => {
  //       this.setState({data: data});
  //     },
  //     error: (xhr, status, err) => {
  //       console.error(this.props.url, status, err.toString());
  //     }
  //   });
  // }
  // handleDelete(id) {
  //   var deleteComment = {id: id}
  //   $.ajax({
  //     url: this.props.url,
  //     type: 'DELETE',
  //     data: deleteComment,
  //     success: (data) => {
  //       this.setState({data: data});
  //     }
  //   });
  // }
  render() {
    const add = bindActionCreators(actions.saveMessage, this.props.dispatch);
    const remove = bindActionCreators(actions.deleteMessage, this.props.dispatch);
    return (
      <div>
        <h1>My Feed</h1>
        <PentaList data={this.props.state.data} url={this.props.url} removeMessage={remove}/>
        <PentaForm url={this.props.url} addMessage={add} />
      </div>
    );
  }
})
