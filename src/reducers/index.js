import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import VehiclesListReducer from './reducer_vehicles_list';

const rootReducer = combineReducers({
  vehicles: VehiclesListReducer,
});

export default rootReducer;
