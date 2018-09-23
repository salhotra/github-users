import { URL } from './constants';

export const fetchUsers = () => fetch(URL.USERS).then(res => res.json());

export const fetchUser = username => fetch(`${URL.SEARCH_USER}?q=${username}`).then(res => res.json());
