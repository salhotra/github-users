import React, { Component } from 'react';

import UserComponent from '../components/User';
import {
  fetchUser,
  fetchRepos,
  fetchGists,
} from '../config/api';

class User extends Component {
  state = {
    user: null,
  }

  async componentDidMount() {
    const { match: { params: { username } } } = this.props;
    const response = await Promise.all([
      fetchUser(username),
      fetchRepos(username),
      fetchGists(username),
    ]);

    const [user, repos, gists] = response;

    this.setState({ user, repos, gists });
  }

  render() {
    const { user, repos, gists } = this.state;

    if (user === null) return <div>Loading...</div>;

    return (
      <div className="container">
        <UserComponent user={user} repos={repos} gists={gists} />
      </div>
    );
  }
}

export default User;
