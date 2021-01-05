import axios from 'axios';
import {
  POSTS_GET_REQUEST,
  POSTS_GET_SUCCESS,
  POSTS_GET_FAIL,
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
  POST_GET_FAIL,
  POST_CREATE_SUCCESS,
  POST_CREATE_REQUEST,
  POST_CREATE_FAIL,
  POST_EDIT_REQUEST,
  POST_EDIT_SUCCESS,
  POST_EDIT_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_DELETE_FAIL,
} from '../constants/postConstants';
import api from '../utils/api';

export const getPosts = () => async dispatch => {
  try {
    dispatch ({
      type: POSTS_GET_REQUEST,
    });

    //     const {userLogin: {userInfo}} = getState ();

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    //TODO: ^^ ADD AUTH

    const {data} = await axios.get (`${api}/posts`);

    dispatch ({
      type: POSTS_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    //   if (message === 'Not authorized, token failed') {
    //     dispatch (logout ());
    //   }
    //TODO: ^^ add auth

    dispatch ({
      type: POSTS_GET_FAIL,
      payload: message,
    });
  }
};