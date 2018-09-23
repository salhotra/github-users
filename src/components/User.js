import React, { Fragment } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

import Gists from './Gists';
import Repos from './Repos';

const User = ({ user, repos, gists }) => {
  return (
    <Fragment>
      <div className="container text-center">
        <img className="profile__image" src={user.avatar_url} alt={user.login} />
      </div>
      <Card className="user-profile">
        <CardBody>
          <CardTitle>{user.name}</CardTitle>
          <p>{user.login}</p>
          <p>{user.location}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <a target="_blank" href={user.html_url} rel="noopener noreferrer">Check out profile</a>
          <div className="profile__content-container">
            { !!repos.length && <Repos repos={repos} /> }
            { !!gists.length && <Gists gists={gists} /> }
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
};

User.propTypes = {
  user: PropTypes.shape().isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  gists: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default User;
