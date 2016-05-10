import React, { Component } from 'react';
import PentaMessage from './PentaMessage';

export default class PentaList extends Component {
  render() {
    var self = this
    var pentaNodes = this.props.data.map(function(comment) {
        return (
          <PentaMessage messageId={comment.id} author={comment.author} key={comment.id} onDelete = {this.props.deleteMessage} photo={comment.photo}>
            {comment.text}
          </PentaMessage>
        );
    }.bind(this))
    return (
      <div className="penta-list">{pentaNodes}</div>
    )
  }
}
