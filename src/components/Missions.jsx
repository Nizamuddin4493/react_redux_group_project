import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { missionThunk, joinMission } from '../redux/missions/mission';

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
                <p className="notAMemberBtn">{ data.reserved ? 'Active member' : 'NOT A MEMBER'}</p>
              </td>
              <td>
                {data.reserved ? (
                  <button type="button">
                    Leave
                  </button>
                ) : (
                  <button type="button" onClick={() => dispatch(joinMission(data.mission_id))}>
                    Join
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
