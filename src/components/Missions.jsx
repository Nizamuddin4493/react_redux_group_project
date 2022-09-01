import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { missionThunk } from '../redux/missions/mission';

function Missions() {
  const missions = useSelector((state) => state.missionReducer);
  useEffect(() => {
    missionThunk();
  }, [missions]);
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th style={{ width: '12%' }}>Mission</th>
            <th style={{ width: '60%' }}>Description</th>
            <th>Status</th>
            <th>---</th>
          </tr>
          { missions.map((data) => (
            <tr key={data.mission_id}>
              <td className="missionTitle">{data.mission_name}</td>
              <td>{data.description}</td>
              <td><button type="button" className="notAMemberBtn">NOT A MEMBER</button></td>
              <td><button type="button" className="joinMemberBtn">Join Mission</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Missions;
