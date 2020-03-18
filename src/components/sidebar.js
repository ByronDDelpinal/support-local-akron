import React, { Component } from 'react';
import { Link } from 'gatsby';

export class Sidebar extends Component {
  render() {
    const { business } = this.props;

    return (
      <div>
        <span>
          <Link key={business.urlName + '1'} to={business.urlName}>
            <img
              src={business.image.file.url}
              alt="blogimage"
              className="img-rounded"
            />
          </Link>
          <Link key={business.urlName + 'a'} to={business.urlName}>
            <span>{business.name}</span>
          </Link>
          <span className="meta">{business.type}</span>
        </span>
      </div>
    );
  }
}

export default Sidebar;
