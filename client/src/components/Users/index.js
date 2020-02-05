import React from 'react';
import './users.scss';

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('api/users')
      .then(res => res.json())
      .then(users => this.setState({users}, () => console.log('users fetched...', users)));
  }

  render() {
    return (
      <div className="users">
        <h2>Users</h2>
        <ul>
          {this.state.users.map(user => 
            <li key={user.id}>{ user.firstName } { user.lastName }</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Users;
