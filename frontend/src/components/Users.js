import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    const url = 'http://friendo.app.localhost/users';

    fetch(url)
      .then(res => res.json())
      .then(countries => this.setState({ countries: countries }))
      .catch(err => console.error);
  }

  render() {
    return (
      <div>
        <h2>Users Container</h2>
        {this.state.countries.map(a => <p>{a.name}</p>)}
      </div>
    );
  }
}

export default Users;
