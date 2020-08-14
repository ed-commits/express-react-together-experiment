import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    const url = 'http://localhost:8000/users';

    fetch(url)
      .then(res => res.json())
      .then(countries => this.setState({ countries: countries }))
      .catch(err => console.error);
  }

  render() {
    return (
      <div>
        <h2>Country Container</h2>
      </div>
    );
  }
}

export default Users;
