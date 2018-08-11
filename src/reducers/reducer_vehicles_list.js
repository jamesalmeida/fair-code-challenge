import _ from 'lodash';
import { FETCH_VEHICLES, FETCH_VEHICLE } from '../actions';

export default function(state = {}, action){
  switch (action.type) {
    case FETCH_VEHICLE:
      // const post = action.payload.data;
      // const newState = { ...state  };
      // newState[post.id] = post;
      // return newState;
      return { ...state, [action.payload.data.data.vehicle.id]: action.payload.data.data.vehicle };
    case FETCH_VEHICLES:
      // console.log(action.payload.data.data.vehicles);
      // console.log('From inside the reducer_posts:');
      // console.log('_.mapKeys(action.payload.data.data.vehicles = ')
      // console.log(_.mapKeys(action.payload.data.data.vehicles, 'id'));
      // _.mapKeys is a Lodash method that changes the array from the API into an object of vehicle objects.
      // First arg is the array itself, 2nd arg is the property we want to pull from each object
      // to use as the key for the key/value pairs in the new object I'm making.
      // This makes it easier to work with imo.
      return _.mapKeys(action.payload.data.data.vehicles, 'id');
    default:
      return state;
  }
}
