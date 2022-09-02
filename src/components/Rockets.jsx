import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rockets, reserveRocket } from '../redux/rockets/rockets';

const Rockets = () => {
  const store = useSelector((state) => state.rocketReducer);
  useEffect(() => {
    rockets();
  }, [store]);

  const dispatch = useDispatch();

  return (
    <>
      { store.map((rData) => (
        <div className="missionConatiner" key={rData.id}>
          <div>
            <img src={rData.flickr_images} alt={rData.rocket_name} />
          </div>
          <div name="info">
            <div><h2>{ rData.rocket_name }</h2></div>
            <div>
              <p>
                { rData.description }
              </p>
            </div>
            <div><button type="button" key={rData.id} onClick={() => dispatch(reserveRocket(rData.id))}>Reserve Rocket</button></div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Rockets;
