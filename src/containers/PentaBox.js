import React, { Component } from 'react';
import PentaForm from '../components/pentabox/PentaForm';
import PentaList from '../components/pentabox/PentaList';
import { connect } from 'react-redux';
import MessageService from '../utils/services/message';
import Header from '../components/layouts/Header';

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
    let { data, url } = this.props;
    const styles = {
      root: {
        width: 700,
        margin: 'auto'
      },
      font: {
        fontFamily: 'Billabong'
      }
    };
    return (
      <div>
        <Header />
        <div style={styles.root}>
          <h1 style={styles.font}>My Feed</h1>
          <PentaList data={data} url={url}/>
          <PentaForm url={url} />
        </div>
      </div>
    );
  }
})
