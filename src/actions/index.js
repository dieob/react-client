import { FETCH_POST_DATA, CREATE_POST } from './types';
import axios from 'axios';


const apiJava = 'http://heroku-java-webapp.herokuapp.com/';

export const fetchPosts = (posts) => {
    return {
        type: FETCH_POST_DATA,
        posts
    }
};

export const fetchPostData = () => {
    return (dispatch) => {
        return axios.get(apiJava+"posts")
            .then(response => {
                dispatch(fetchPosts(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const createPost = (post) => {
    return {
        type: CREATE_POST,
        post
    }
};

export const createPostData = (post) => {
    return (dispatch) => {
        return axios.post(apiJava+"post", post)
            .then(response => {
                dispatch(createPost(post))
            })
            .catch(error => {
                throw (error);
            });
    };
};
