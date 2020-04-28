import { FETCH_POST_DATA } from './types';
import axios from 'axios';


const apiJava = 'http://heroku-java-webapp.herokuapp.com/posts';

export const fetchPosts = (posts) => {
    return {
        type: FETCH_POST_DATA,
        posts
    }
};

export const fetchPostData = () => {
    return (dispatch) => {
        return axios.get(apiJava)
            .then(response => {
                dispatch(fetchPosts(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};