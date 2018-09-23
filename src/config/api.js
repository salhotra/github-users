import { URL } from './constants';

const get = url => fetch(url).then(res => res.json());

export const fetchUsers = () => get(URL.USERS);

export const searchUser = username => get(`${URL.SEARCH_USER}?q=${username}`);

export const fetchUser = username => get(`${URL.USERS}/${username}`);

export const fetchRepos = username => get(`${URL.USERS}/${username}/repos`);

export const fetchGists = username => get(`${URL.USERS}/${username}/gists`);
