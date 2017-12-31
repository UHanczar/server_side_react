import axios from 'axios';

import { FETCH_USERS } from './types';

const URL = 'http://react-ssr-api.herokuapp.com';

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get(`${URL}/users`);

  console.log('RES', res.data);

  dispatch({
    type: FETCH_USERS,
    payload: res.data
  });
};
