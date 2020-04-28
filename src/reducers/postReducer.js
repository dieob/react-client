import { FETCH_POST_DATA } from '../actions/types';

export default function postReducer(state = [], action) {
  switch (action.type) {
      case FETCH_POST_DATA:
        console.log("POST REDUCER");
        console.log(action);
      return action.posts;
    default:
      return state;
  }
}