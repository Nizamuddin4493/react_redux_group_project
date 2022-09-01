import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getMissions from '../redux/actions/index';

function Missions() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);
  const missions = useSelector((state) => state.getMissions);
  console.log(missions);
  return (
    <div>
      {/* {missions.map((mission) => (
        <div key={mission.id}>
          <h2>{mission.rocketName}</h2>
          <p>{mission.description}</p>
        </div>
      ))} */}

    </div>
  );
}

export default Missions;
