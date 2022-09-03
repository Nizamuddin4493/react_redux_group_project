import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MyProfile from '../components/MyProfile';

it('Test Mission Component', () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <MyProfile />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
