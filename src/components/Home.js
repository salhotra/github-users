import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';

const Home = ({ users }) => (
  <div className="users">
    {
      users.map(user => (
        <div key={user.id}>
          <Card className="user__card">
            <CardImg top width="100%" src={user.avatar_url} alt={user.login} />
            <CardBody>
              <CardTitle>{user.login}</CardTitle>
              <CardSubtitle>
                <Link to={`users/${user.login}`}>Check out profile</Link>
              </CardSubtitle>
            </CardBody>
          </Card>
        </div>
      ))
    }
  </div>
);

Home.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Home;
