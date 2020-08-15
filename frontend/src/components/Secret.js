import React from 'react';
import { ApiUrl } from '../settings/ApiUrl';

class Secret extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secret: null
    };
  }

  componentDidMount() {
    fetch(ApiUrl("secret"))
      .then(res => res.json())
      .then(secret => this.setState({ secret: secret }))
      .catch(err => console.error);
  }

  render() {
    return (
      <div>
        <h2>Your Secret Information:</h2>
        {this.state.secret}
      </div>
    );
  }
}

export default Secret;
