import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { missionThunk, joinMission, leaveMission } from '../redux/missions/mission';

function Missions() {
  const missions = useSelector((state) => state.missionReducer);
  useEffect(() => {
    missionThunk();
  }, [missions]);

  const dispatch = useDispatch();

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
          {missions.map((data) => (
            <tr key={data.mission_id}>
              <td className="missionTitle">{data.mission_name}</td>
              <td>{data.description}</td>
              <td>
                { data.reserved ? <p className="activeMember">Active Member</p> : <p className="notAMemberBtn">NOT A MEMBER</p> }
              </td>
              <td>
                {data.reserved ? (
                  <button type="button" onClick={() => dispatch(leaveMission(data.mission_id))} className="LeaveMemberBtn">
                    Leave Mission
                  </button>
                ) : (
                  <button type="button" onClick={() => dispatch(joinMission(data.mission_id))} className="joinMemberBtn">
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Missions;
