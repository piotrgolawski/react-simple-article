import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { apiUri } from '../env/api';
import { loadArticle, SET_ERROR, SET_ARTICLE } from '../state/actions/article.action';
const mockStore = configureMockStore([thunk]);

describe('Action', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  describe('loadArticle', () => {
    let store;
    let dispatch;

    beforeEach(() => {
      store = mockStore({});
      dispatch = jest.spyOn(store, 'dispatch');
    });

    it('dispatch setArticle when data is valid', async done => {
      const data = {
        name: 'Article title',
        elements: {
          author: null,
          body: null,
          date: null,
          heading: null,
          mainImage: null,
        },
      };

      fetchMock.getOnce(apiUri, {
        body: data,
        headers: { 'content-type': 'application/json' },
      });

      await dispatch(loadArticle());
      const action = store.getActions()[0].type;
      const payload = store.getActions()[0].payload;
      const expectedPayload = { elements: data.elements, title: data.name };

      expect(action).toBe(SET_ARTICLE);
      expect(payload).toEqual(expectedPayload);
      expect(dispatch).toHaveBeenCalledTimes(1);
      done();
    });

    it('dispatch setError when data is not valid', async done => {
      const data = {
        name: 'Article Title',
        elements: {
          author: null,
          heading: null,
          mainImage: null,
        },
      };

      fetchMock.getOnce(apiUri, {
        body: data,

        headers: { 'content-type': 'application/json' },
      });

      await dispatch(loadArticle());
      const action = store.getActions()[0].type;
      const error = store.getActions()[0].error.toString();
      const expectedError = 'Error: Data not valid!';

      expect(action).toBe(SET_ERROR);
      expect(error).toEqual(expectedError);
      expect(dispatch).toHaveBeenCalledTimes(1);
      done();
    });

    it('dispatch setError when api respond with error', async done => {
      const apiError = 'Api Error';

      fetchMock.mock(apiUri, () => {
        throw new Error(apiError);
      });

      await dispatch(loadArticle());
      const action = store.getActions()[0].type;
      const error = store.getActions()[0].error.toString();

      expect(action).toBe(SET_ERROR);
      expect(error).toContain(apiError);
      expect(dispatch).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
