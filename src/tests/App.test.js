import React from 'react';
import App from '../App';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Spinner from '../components/Spinner';
import ErrorPage from '../components/ErrorPage';
import Heading from '../components/Heading';

const mockStore = configureMockStore([thunk]);

/**
 * @type ShallowWrapper
 */
let container;

describe('<App /> should', () => {
  describe('when loading is on', () => {
    beforeEach(() => {
      const store = mockStore({ loading: true });
      createContainer(store);
    });

    it('should display loader', () => {
      expect(container.find(Spinner)).toHaveLength(1);
    });
  });

  describe('when there was an error', () => {
    const errorString = 'Some fetch error';
    beforeEach(() => {
      const store = mockStore({ error: errorString });
      createContainer(store);
    });

    it('should display error page', () => {
      expect(container.find(ErrorPage)).toHaveLength(1);
      expect(container.text().includes(errorString)).toBeTruthy();
    });
  });

  describe('when there was no error', () => {
    beforeEach(() => {
      const store = mockStore({ loading: false, error: null });
      createContainer(store);
    });

    it('should display normal page', () => {
      expect(container.find(Spinner)).toHaveLength(0);
      expect(container.find(ErrorPage)).toHaveLength(0);
      expect(container.find(Heading)).toHaveLength(1);
    });
  });
});

function createContainer(store) {
  container = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
