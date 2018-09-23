import React, { Component } from 'react';
import uuid from 'uuid';

import HomeComponent from '../components/Home';
import {
  fetchUsers,
  searchUser,
} from '../config/api';

class Home extends Component {
  state = {
    users: [],
  }

  async componentDidMount() {
    const users = await fetchUsers();
    this.setState({ users });
  }

  handleTextChange = async (event) => {
    const searchText = event.target.value;

    if (searchText.length === 0) {
      const users = await fetchUsers();
      this.setState({ users });
    } else {
      const response = await searchUser(searchText);
      this.setState({ users: response.items });
    }
  }

  render() {
    const { users } = this.state;
    return (
      <div className="container text-center">
        <input className="input__search-user" type="text" placeholder="Search Users" onChange={this.handleTextChange} />
        <HomeComponent key={uuid()} users={users} />
      </div>
    );
  }
}

export default Home;
