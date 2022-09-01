import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as actions from '../types';

const URL = 'https://api.spacexdata.com/v3/missions';

const getMissions = createAsyncThunk(actions.GET_MISSIONS,
  async () => {
    const { data } = await axios.get(`${URL}`);

    const missions = data.map((mission) => ({
      id: mission.mission_id,
      rocketName: mission.mission_name,
      description: mission.description,
    }));

    return missions;
  });

export default getMissions;
