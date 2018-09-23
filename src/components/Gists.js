import React, { Fragment } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

const Gists = ({ gists }) => {
  return (
    <div>
      <h3>Gists</h3>
      <ListGroup>
        {
          gists.map(gist => (
            <Fragment>
              {
                gist.description && (
                  <ListGroupItem>
                    <a target="_blank" href={gist.html_url} rel="noopener noreferrer">{gist.description}</a>
                  </ListGroupItem>
                )
              }
            </Fragment>
          ))
        }
      </ListGroup>
    </div>
  );
};

Gists.propTypes = {
  gists: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Gists;
