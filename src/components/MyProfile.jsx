import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missionStore = useSelector((state) => state.missionReducer);
  const reservedMissions = missionStore.filter((mission) => mission.reserved === true);

  return (
    <>
      <div className="profileContainer">
        <div className="missionSection">
          <h1>My Missions</h1>
          <div name="missonList">
            { reservedMissions.map((mission) => (
              <li key={mission.mission_id}>
                {mission.mission_name}
              </li>
            ))}
          </div>
        </div>
        <div className="rocketSection">
          <h1>My Rockets</h1>
          <div name="rocketList">
            <li>Some text goes her</li>
            <li>Some text goes her</li>
            <li>Some text goes her</li>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyProfile;
