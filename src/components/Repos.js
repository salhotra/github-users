import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
  return (
    <div>
      <h3>Repos</h3>
      <ListGroup>
        {
          repos.map(repo => (
            <ListGroupItem>
              <a target="_blank" href={repo.html_url} rel="noopener noreferrer">{repo.name}</a>
            </ListGroupItem>
          ))
        }
      </ListGroup>
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Repos;
