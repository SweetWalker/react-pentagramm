import React, { Component } from 'react';
import PentaMessage from './PentaMessage';
import { connect } from 'react-redux';
import * as actions from '../actions/PentaFeed';

export default connect()
(class PentaList extends Component {
  render() {
    let { dispatch, url } = this.props;
    var pentaNodes = this.props.data.map(comment => {
        return (
          <PentaMessage removeAction={actions.deleteMessage} dispatch={dispatch} url={url} message={comment} key={comment.id}>
            {comment.text}
          </PentaMessage>
        );
    });
    return (<div className="penta-list">{pentaNodes}</div>)
  }
})
