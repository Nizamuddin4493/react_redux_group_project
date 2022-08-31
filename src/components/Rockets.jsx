import React from 'react';
import test from './images/FB_IMG_1534950152549.jpg';

const Rockets = () => (
  <>
    <div className="missionConatiner">
      <div>
        <img src={test} alt="Mission" />
      </div>
      <div name="info">
        <div><h2>Falcon 1</h2></div>
        <div><p> ekjkfejhf;ekhf;ek fekljf ;ekhf;ekjfh ;keh;f jhe; fkjeh; fkje;f kje;f kje </p></div>
        <div><button type="button">Reserve Rocket</button></div>
      </div>
    </div>

    <div className="missionConatiner">
      <div>
        <img src={test} alt="Mission" />
      </div>
      <div name="info">
        <div><h2>Falcon 1</h2></div>
        <div><p> ekjkfejhf;ekhf;ek fekljf ;ekhf;ekjfh ;keh;f jhe; fkjeh; fkje;f kje;f kje</p></div>
        <div><button type="button">Reserve Rocket</button></div>
      </div>
    </div>

    <div className="missionConatiner">
      <div>
        <img src={test} alt="Mission" />
      </div>
      <div name="info">
        <div><h2>Falcon 1</h2></div>
        <div><p> ekjkfejhf;ekhf;ek fekljf ;ekhf;ekjfh ;keh;f jhe; fkjeh; fkje;f kje;f </p></div>
        <div><button type="button">Reserve Rocket</button></div>
      </div>
    </div>
  </>
);

export default Rockets;
