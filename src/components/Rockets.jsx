import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { rockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const store = useSelector((state) => state.rocketReducer);
  console.log(store);
  useEffect(() => {
    rockets();
  }, [store]);
  return (
    <>
      <div className="missionConatiner">
        <div>
          <img src={test} alt="Mission" />
        </div>
        <div name="info">
          <div><h2>Falcon 1</h2></div>
          <div><p> ekjkfejhf;ekhf;ek fekljf ;ekhf;ekjfh ;keh;f</p></div>
          <div><button type="button">Reserve Rocket</button></div>
        </div>
      </div>

      <div className="missionConatiner">
        <div>
          <img src={test} alt="Mission" />
        </div>
        <div name="info">
          <div><h2>Falcon 1</h2></div>
          <div><p> ekjkfejhf;ekhf;ek fekljf ;ekhf;ekjfh ;keh;f jhe; fkjeh; fkje;f</p></div>
          <div><button type="button">Reserve Rocket</button></div>
        </div>
      </div>
    </>
  );
};

export default Rockets;
