import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rockets, reserveRocket, cancelRocket } from '../redux/rockets/rockets';

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
                { rData.reserved ? (
                  <button type="button" className="whenReserved" key={rData.id}>Reserved</button>
                ) : '' }
                { rData.description }
              </p>
            </div>
            <div>
              { rData.reserved ? (
                <button type="button" className="cancelRocketBtn" key={rData.id} onClick={() => dispatch(cancelRocket(rData.id))}>Cancel Reservation</button>
              ) : (
                <button type="button" className="reserveRocket" key={rData.id} onClick={() => dispatch(reserveRocket(rData.id))}>Reserve Rocket</button>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Rockets;
