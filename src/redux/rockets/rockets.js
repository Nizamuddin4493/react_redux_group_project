import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKETS = 'get_rockets';
const RESERVE_ROCKETS = 'reserve_rockets';
const CANCEL_ROCKETS = 'cancel_rockets';
const INITIAL_STATE = [];

export function rocketData(payload) {
  return {
    type: GET_ROCKETS,
    payload,
  };
}

export function reserveRocket(payload) {
  return {
    type: RESERVE_ROCKETS,
    payload,
  };
}

export function cancelRocket(payload) {
  return {
    type: CANCEL_ROCKETS,
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
      reserved: false,
    }));
    return fetchRocketData;
  },
);

export default function rocketReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return [...action.payload];
    case RESERVE_ROCKETS:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
    case CANCEL_ROCKETS:
      return state.map((rocketCancel) => {
        if (rocketCancel.id !== action.payload) return rocketCancel;
        return { ...rocketCancel, reserved: !rocketCancel.reserved };
      });
    default:
      return state;
  }
}
