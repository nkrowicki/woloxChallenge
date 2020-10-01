import technologyReducer from "../../reducers/technologyReducer";
import { types } from "../../types/types";
import { compare } from "../../helpers/compare";

describe("Reducers", () => {
  test("default: Return state", () => {
    const state = {};
    expect(technologyReducer(state, "")).toEqual(state);
  });

  const state = {
    filteredList: [],
    list: [],
    order: false,
    isLoading: true,
  };

  test("loadTechnologies", () => {
    const lista = [
      {
        tech: "Android",
        year: "2008",
        author: "Google",
        license: "Apache",
        language: "Java, Kotlin",
        type: "Mobile",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Android_robot_2014.svg/75px-Android_robot_2014.svg.png",
      },
      {
        tech: "Angular",
        year: "2016",
        author: "Google",
        license: "MIT",
        language: "TypeScript",
        type: "Front-End",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
      },
    ];

    const expected = {
      ...state,
      list: lista,
      filteredList: lista.sort((a, b) => compare(a, b, !state.order)),
    };
    const action = {
      type: types.loadTechnologies,
      payload: lista,
    };
    expect(technologyReducer(state, action)).toEqual(expected);
  });

  test("searchTechnology", () => {
    const searchText = "To search";

    const expected = {
      ...state,
      filteredList: state.list.filter(
        (technology) =>
          technology.tech.toLowerCase().includes(searchText) ||
          technology.type.toLowerCase().includes(searchText)
      ),
    };
    const action = {
      type: types.searchTechnology,
      payload: searchText,
    };
    expect(technologyReducer(state, action)).toEqual(expected);
  });

  test("startLoadTechnologies", () => {

    const expected = { ...state, isLoading: true }

    const action = {
      type: types.startLoadTechnologies,
    };
    expect(technologyReducer(state, action)).toEqual(expected);
  });

  test("endLoadTechnologies", () => {
 
    const expected = { ...state, isLoading: false };

    const action = {
      type: types.endLoadTechnologies,
    };
    expect(technologyReducer(state, action)).toEqual(expected);
  });

  test("orderTechnologies", () => {
    const state = {
      filteredList: [],
      list: [
        {
          tech: "Android",
          year: "2008",
          author: "Google",
          license: "Apache",
          language: "Java, Kotlin",
          type: "Mobile",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Android_robot_2014.svg/75px-Android_robot_2014.svg.png",
        },
        {
          tech: "Angular",
          year: "2016",
          author: "Google",
          license: "MIT",
          language: "TypeScript",
          type: "Front-End",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
        },
      ],
      order: false,
      isLoading: true,
    };

    const expected = {
      ...state,
      filteredList: state.filteredList.sort((a, b) =>
        compare(a, b, state.order)
      ),
      order: !state.order,
    };

    const action = {
      type: types.orderTechnologies,
    };
    expect(technologyReducer(state, action)).toEqual(expected);
  });

  test("clearTechnologies", () => {
 
    const initialState = {
      filteredList: [],
      list: [],
      order: false,
      isLoading: true,
    };

    const action = {
      type: types.clearTechnologies,
    };
    
    expect(technologyReducer(state, action)).toEqual(initialState);
  });
});
