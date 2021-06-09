import config from '../config';

const baseUrl = config.api.baseUrl;
const authorizeUrl = `https://accounts.spotify.com/authorize?`+
  `client_id=${config.api.clientId}&redirect_uri=http://localhost:3000/&response_type=token&show_dialog=true`;

async function fetchNewReleases(token) {
  const response = await fetch(`${baseUrl}/browse/new-releases`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data.albums.items;
}

async function fetchFeaturedPlaylist(token) {
  const response = await fetch(`${baseUrl}/browse/featured-playlists`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data.playlists.items;
}

async function fetchCategories(token) {
  const response = await fetch(`${baseUrl}/browse/categories`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data.categories.items;
}



export default {
  authorizeUrl,
  fetchNewReleases,
  fetchFeaturedPlaylist,
  fetchCategories
};
