import React from 'react';

const Missions = () => (
  <>
    <table>
      <tr>
        <th style={{ width: '12%' }}>Mission</th>
        <th style={{ width: '60%' }}>Description</th>
        <th>Status</th>
        <th>---</th>
      </tr>
      <tr>
        <td className="missionTitle"> Alfreds Futterkiste</td>
        <td>Maria Anders Maria Anders Maria Anders Maria Anders</td>
        <td><button type="button" className="notAMemberBtn">NOT A MEMBER</button></td>
        <td><button type="button" className="joinMemberBtn">Join Mission</button></td>
      </tr>
      <tr>
        <td className="missionTitle">Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td><button type="button" className="activeMemberBtn">Active Member</button></td>
        <td><button type="button" className="leaveMissionBtn">Leave Mission</button></td>
      </tr>
      <tr>
        <td className="missionTitle">Ernst Handel</td>
        <td> Maria AndersMaria Anders Maria AndersMaria Anders Maria</td>
        <td><button type="button" className="notAMemberBtn">NOT A MEMBER</button></td>
        <td><button type="button" className="joinMemberBtn">Join Mission</button></td>
      </tr>
    </table>
  </>
);

export default Missions;
