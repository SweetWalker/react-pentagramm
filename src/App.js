import React, { Component } from 'react';
import PentaForm from './components/PentaForm';
import PentaList from './components/PentaList';

import $ from 'jquery';

export default class PentaBox extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
  }
  handleCommentSubmit(comment) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  handleDelete(id) {
    var deleteComment = {id: id}
    $.ajax({
      url: this.props.url,
      type: 'DELETE',
      data: deleteComment,
      success: (data) => {
        this.setState({data: data});
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Feed</h1>
        <PentaList data={this.state.data} deleteMessage={this.handleDelete.bind(this)} />
        <PentaForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
      </div>
    );
  }
}
