import 'whatwg-fetch';

import * as actions from '../../actions/PentaFeed';
import store from '../../store';

export default (function() {
    let Service = function(url) {
      this.url = url;
    };

    Service.prototype._setUrl = function(url) {
      this.url = url;
    };

    Service.prototype.removeMessage = function(id) {
      fetch(
        this.url,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: id })
        }
      )
        .then(() => store.dispatch(actions.removeMessage(id)))
        .catch(console.log.bind(console));
    };

    Service.prototype.getAllMessages = function() {
      fetch(this.url)
        .then(response => response.json())
        .then(json => store.dispatch(actions.getMessages(json)))
        .catch(console.log.bind(console));
    };

    Service.prototype.saveMessage = function(comment) {
      fetch(
        this.url,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(comment)
        }
      )
        .then(response => response.json())
        .then(json => store.dispatch(actions.addMessage(json)))
        .catch(console.log.bind(console));
    };

    let ServiceProvider = function() {
      this.serviceInstance = null;
    };

    ServiceProvider.prototype.setUrl = function(url) {
      if (this.serviceInstance) {
        this.serviceInstance._setUrl(url);
      } else {
        this.serviceInstance = new Service(url);
      }
    };

    ServiceProvider.prototype.getInstance = function(url) {
      if (!this.serviceInstance) {
        this.serviceInstance = new Service(url);
      }
      return this.serviceInstance;
    };

    return new ServiceProvider();
})()
