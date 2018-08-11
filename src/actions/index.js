import axios from 'axios';

export const FETCH_VEHICLES = 'fetch_vehicles';
export const FETCH_VEHICLE = 'fetch_vehicle';

const ROOT_URL = 'https://private-f14e4-interviewapi3.apiary-mock.com/vehicles';

export function fetchVehicles() {
  const request = axios.get(`${ROOT_URL}?page=1`);
  // console.log(request);
  return {
    type: FETCH_VEHICLES,
    payload: request
  };
}

export function fetchVehicle(id) {
  const request = axios.get(`${ROOT_URL}/${id}`);

  return {
    type: FETCH_VEHICLE,
    payload: request
  }
}
