import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import api from '../../../api';

const queryString = require('query-string');
export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  // TODO: Move auth logic to a separate class or component
  isAuth() {
    const location = window.location;
    const hash = queryString.parse(location.hash);
    return hash.access_token;
  }

  componentDidMount() {
    const token = this.isAuth();
    if (token) {
      // Fetch all data and update state only once all data is available
      Promise.all([
        api.fetchNewReleases(token),
        api.fetchFeaturedPlaylist(token),
        api.fetchCategories(token)
      ])
        .then(([newReleases, playlists, categories]) => {
          return this.setState((state) => ({
            ...state,
            newReleases,
            playlists,
            categories
          }))
        });
    } else {
      // Authenticate user
      window.location = api.authorizeUrl;
    }
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
