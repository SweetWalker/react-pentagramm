import React, { Component } from 'react';
import PentaMessage from './PentaMessage';

export default class PentaList extends Component {
  render() {
    let { url } = this.props;
    var pentaNodes = this.props.data.map(comment => {
        return (
          <PentaMessage url={url} message={comment} key={comment.id}>
            {comment.text}
          </PentaMessage>
        );
    });
    return (<div className="penta-list">{pentaNodes}</div>)
  }
}
