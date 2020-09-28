import { types } from "../types/types";

const initialState = {
  filteredList: [],
  list: [],
  isLoading: true,
};

const technologyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadTechnologies:
      return {...state, list: action.payload, filteredList: action.payload };

    case types.searchTechnology:
      const searchText = action.payload.toLowerCase();

      return {
        ...state,
        filteredList: state.list.filter((technology) =>
          technology.tech.toLowerCase().includes(searchText)
        ),
      };

    case types.startLoadTechnologies:
      return { ...state, isLoading: true };

    case types.endLoadTechnologies:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default technologyReducer;
