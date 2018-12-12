import React, { Component, PureComponent } from 'react';
import './App.css';
import uuid from 'uuid/v4';

class App extends Component {
  constructor(props) {
    super(props);
    this.lastUpdateDate = new Date();
  }
  state = {
    messages: new Array(10).fill(1).map((val, i) => {
      return { id: i, value: i, name: 'Jane Doe' };
    })
  };

  // DOM only updated once per second
  // https://stackoverflow.com/questions/48757972/react-js-how-to-only-allow-component-to-update-once-per-second
  shouldComponentUpdate() {
    const now = new Date();
    var seconds = (now.getTime() - this.lastUpdateDate.getTime()) / 1000;
    return seconds >= 1;
  }

  componentDidUpdate() {
    this.lastUpdateDate = new Date();
  }

  componentDidMount() {
    this.ws = new WebSocket('ws://localhost:7770');

    this.ws.onopen = evt => {
      this.ws.send('init');
    };

    this.ws.onmessage = evt => {
      console.log('new message');
      let { id, value, name } = JSON.parse(evt.data);
      this.setState(prev => {
        let newMessages = [...prev.messages];
        newMessages[id] = { id, value, name };
        newMessages = newMessages.sort((a, b) => {
          if (a.value < b.value) return -1;
          if (a.value > b.value) return 1;
          return 0;
        });
        return {
          messages: newMessages
        };
      });
    };

    this.ws.onclose = function(evt) {
      console.log('close');
    };
  }

  render() {
    console.log('App rendered')
    let messageRows = this.state.messages.map(({ id, value, name }) => {
      return <Row key={uuid()} id={id} value={value} name={name} />;
    });
    return (
      <div className="App">
        <table className="Table table striped">
          <caption>Messages</caption>
          <thead>
            <tr>
              <th>Id</th>
              <th>Value</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{messageRows}</tbody>
        </table>
      </div>
    );
  }
}

export default App;

class Row extends PureComponent {
  render() {
    console.log('Row rendered')
    let { id, value, name } = this.props;
    return (
      <tr className="Row">
        <td>{id}</td>
        <td>{value}</td>
        <td>{name}</td>
      </tr>
    );
  }
}
