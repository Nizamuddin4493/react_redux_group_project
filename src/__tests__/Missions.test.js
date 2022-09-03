import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/Missions';

it('Test Mission Component', () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <Missions />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
