import { createAsyncThunk } from '@reduxjs/toolkit';

export const GET_MISSIONS = './SpaceTravelet/components/GET_MISSIONS';
export const JION_MISSION = './SpaceTravelet/components/JION_MISSION';
export const LEAVE_MISSION = './SpaceTravelet/components/LEAVE_MISSION';
const INITIAL_STATE = [];

export function missionsAction(payload) {
  return {
    type: GET_MISSIONS,
    payload,
  };
}

export function joinMission(id) {
  return {
    type: JION_MISSION,
    payload: id,
  };
}

export function leaveMission(payload) {
  return {
    type: LEAVE_MISSION,
    payload,
  };
}

export const missionThunk = createAsyncThunk(
  GET_MISSIONS,
  async () => {
    const res = await fetch('https://api.spacexdata.com/v3/missions');
    const missionData = await res.json();
    const fetchMissionData = missionData.map((data) => ({
      mission_id: data.mission_id,
      mission_name: data.mission_name,
      description: data.description,
      reserved: false,
    }));
    return fetchMissionData;
  },
);

export default function missionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
      return [...action.payload];
    case JION_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: !mission.reserved };
      });
    case LEAVE_MISSION:
      return state.map((missionLeave) => {
        if (missionLeave.mission_id !== action.payload) return missionLeave;
        return { ...missionLeave, reserved: !missionLeave.reserved };
      });
    default:
      return state;
  }
}
