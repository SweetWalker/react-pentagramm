import React, { Component } from 'react';
import PentaMessage from './PentaMessage';

export default class PentaList extends Component {
  render() {
    var pentaNodes = this.props.data.map(function(comment) {
        return (
          <PentaMessage removeAction={this.props.removeMessage} url={this.props.url} message={comment} key={comment.id}>
            {comment.text}
          </PentaMessage>
        );
    }.bind(this))
    return (<div className="penta-list">{pentaNodes}</div>)
  }
}
