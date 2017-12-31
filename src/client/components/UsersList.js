import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    this.props.users.map(user => <li key={user.id}>{user.name}</li>)
  }
  render() {
    return (
      <div>
        <h2>Here is the list of users:</h2>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

UsersList.propsTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
};

const mapStateToProps = ({ users }) => ({
  users
});

export default connect(mapStateToProps, actions)(UsersList);
