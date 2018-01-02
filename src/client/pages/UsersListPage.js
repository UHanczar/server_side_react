import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions';

class UsersListPage extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    console.log('TP', this.props);
    return (
      <div>
        <h2>Here is the list of users:</h2>
        <ul>
          {this.props.users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    );
  }
}

UsersListPage.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = ({ users }) => ({
  users
});

const loadData = store => store.dispatch(actions.fetchUsers());

export default {
  loadData,
  component: connect(mapStateToProps, actions)(UsersListPage)
};

