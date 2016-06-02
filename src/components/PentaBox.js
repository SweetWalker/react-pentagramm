import React, { Component } from 'react';
import PentaForm from './PentaForm';
import PentaList from './PentaList';
import { connect } from 'react-redux';
import * as actions from '../actions/PentaFeed';
import { bindActionCreators } from 'redux';
import MessageService from '../utils/services/message';

export default connect(state => state)
(class PentaBox extends Component {
  componentDidMount() {
    let service = MessageService.getInstance(this.props.url);
    service.getAllMessages();

    setInterval(
      () => service.getAllMessages(),
      this.props.pollInterval
    );
  }
  render() {
    // const add = bindActionCreators(actions.saveMessage, this.props.dispatch);
    // const remove = bindActionCreators(actions.deleteMessage, this.props.dispatch);
    // <div>
    //   <h1>My Feed</h1>
    //   <PentaList data={this.props.state.data} url={this.props.url} removeMessage={remove}/>
    //   <PentaForm url={this.props.url} addMessage={add} />
    // </div>
    let { data, url } = this.props;
    return (
      <div>
        <h1>My Feed</h1>
        <PentaList data={data} url={url}/>
        <PentaForm url={url} />
      </div>
    );
  }
})
