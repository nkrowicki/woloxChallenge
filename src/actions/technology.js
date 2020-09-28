import { types } from "../types/types";

export const fetchTechnologies = () => {
  return async (dispatch) => {
    // Fetch and load technologies
    // dispatch()
    dispatch (getTechnologiesToFilter())
  };
};

export const searchTechnologies = (searchText) => ({
        type: types.searchTechnology,
        payload: searchText,
});

export const getTechnologiesToFilter = () => ({
    type: types.getTechnology,
})