import {
  startFetchTechnologies,
  searchTechnologies,
  loadTechnologies,
  startLoading,
  finishLoading,
  clearTechnologies,
  orderTechnologies
} from "../../actions/technology";
import { types } from "../../types/types";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect"; 

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Actions technology ", () => {
  beforeEach(() => {
    // jest.setTimeout(10000);
  });

  afterEach(() => {
    fetchMock.restore();
  });

  test("startFetchTechnologies", () => {
    fetchMock.getOnce(
      "https://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs",
      {
        body: {
          tech: ["i", "want", "to", "work", "in", "wolox", "with", "you!"],
        },
        headers: { "content-type": "application/json" },
      }
    );

    const expectedActions = [
      { type: types.startLoadTechnologies },
      {
        type: types.loadTechnologies,
        payload: {
          tech: ["i", "want", "to", "work", "in", "wolox", "with", "you!"],
        },
      },
      { type: types.endLoadTechnologies },
    ];
    const store = mockStore({});

    return store.dispatch(startFetchTechnologies()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test("searchTechnologies", () => {
    const searchText = "Wolox text";
    const expectedAction = {
      type: types.searchTechnology,
      payload: searchText,
    };
    expect(searchTechnologies(searchText)).toEqual(expectedAction);
  });

  test("loadTechnologies", () => {
    const data = "Wolox data";
    const expectedAction = {
      type: types.loadTechnologies,
      payload: data,
    };
    expect(loadTechnologies(data)).toEqual(expectedAction);
  });

  test("startLoading", () => {
    const expectedAction = {
      type: types.startLoadTechnologies,
    };
    expect(startLoading()).toEqual(expectedAction);
  });

  test("finishLoading", () => {
    const expectedAction = {
      type: types.endLoadTechnologies,
    };
    expect(finishLoading()).toEqual(expectedAction);
  });

  test("clearTechnologies", () => {
    const expectedAction = {
      type: types.clearTechnologies,
    };
    expect(clearTechnologies()).toEqual(expectedAction);
  });

  test("orderTechnologies", () => {
    const expectedAction = {
      type: types.orderTechnologies,
    };
    expect(orderTechnologies()).toEqual(expectedAction);
  });
});
