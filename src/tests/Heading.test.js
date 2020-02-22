import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Heading from '../components/Heading';
import Author from '../components/Author';
import ArticleDate from '../components/ArticleDate';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/**
 * @type ShallowWrapper
 */
let container;

describe('<Heading /> should', () => {
  const testDate = new Date('1990-05-20');

  describe('when data is provided', () => {
    const data = {
      article: {
        elements: {
          author: { value: 'Nash Bridges' },
          date: { value: testDate },
        },
      },
    };
    beforeEach(() => {
      const store = mockStore(data);
      createContainer(store);
    });

    it('should display correct initials', () => {
      const initials = data.article.elements.author.value
        .split(' ')
        .map(t => t.charAt(0))
        .join('');
      expect(container.find('.MuiAvatar-circle').text()).toBe(initials);
    });

    it('should display correct name', () => {
      expect(container.find(Author).text()).toBe(data.article.elements.author.value);
    });

    it('should display correct date', () => {
      const localDate = new Date(data.article.elements.date.value).toLocaleDateString();
      expect(container.find(ArticleDate).text()).toBe(localDate);
    });
  });
});

function createContainer(store) {
  container = mount(
    <Provider store={store}>
      <Heading />
    </Provider>
  );
}
