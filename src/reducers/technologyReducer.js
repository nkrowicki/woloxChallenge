import { types } from "../types/types";
import { compare } from "../helpers/compare";

const initialState = {
  filteredList: [],
  list: [],
  order: false,
  isLoading: true,
};

const technologyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadTechnologies:
      return { ...state, list: action.payload, filteredList: action.payload.sort((a, b) =>
        compare(a, b, !state.order)
      ), };

    case types.searchTechnology:
      const searchText = action.payload.toLowerCase();
      return {
        ...state,
        filteredList: state.list.filter(
          (technology) =>
            technology.tech.toLowerCase().includes(searchText) ||
            technology.type.toLowerCase().includes(searchText)
        ),
      };

    case types.startLoadTechnologies:
      return { ...state, isLoading: true };

    case types.endLoadTechnologies:
      return { ...state, isLoading: false };

    case types.orderTechnologies:
      return {
        ...state,
        filteredList: state.filteredList.sort((a, b) =>
          compare(a, b, state.order)
        ),
        order: !state.order,
      };

    case types.clearTechnologies:
      return initialState;
    default:
      return state;
  }
};

export default technologyReducer;
