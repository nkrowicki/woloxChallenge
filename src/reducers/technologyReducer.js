import { types } from "../types/types";

const initialState = {
  filteredList: [],
  list: []
};

const technologyReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.loadTechnologies:
      return { list: action.payload, filteredList: action.payload };

    case types.searchTechnology:
      const searchText = action.payload.toLowerCase();

      return {
        ...state,
        filteredList: 
          state.list.filter((technology) =>
            technology.tech.toLowerCase().includes(searchText)
          ),
      };

    default:
      return state;
  }
};

export default technologyReducer;
