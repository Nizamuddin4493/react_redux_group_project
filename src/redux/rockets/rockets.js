import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKETS = 'get_rockets';
const INITIAL_STATE = [];

export function rocketData(payload) {
  return {
    type: GET_ROCKETS,
    payload,
  };
}

export const rockets = createAsyncThunk(
  GET_ROCKETS,
  async () => {
    const res = await fetch('https://api.spacexdata.com/v3/rockets');
    const rockets = await res.json();
    const fetchRocketData = rockets.map((data) => ({
      id: data.id,
      rocket_name: data.rocket_name,
      description: data.description,
      flickr_images: data.flickr_images,
    }));
    return fetchRocketData;
  },
);

export default function rocketReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
}
