import { types } from "../types/types";
import swal from "sweetalert";

export const startFetchTechnologies = () => {

  return async (dispatch) => {
    try {
      const res = await fetch(
        "http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs"
      );
      const data = await res.json();
      dispatch(loadTechnologies(data));
    } catch (error) {
      await swal('Error', 'An error has occurred', 'error');
    }
  };
};

export const searchTechnologies = (searchText) => ({
  type: types.searchTechnology,
  payload: searchText,
});

export const loadTechnologies = (data) => ({
  type: types.loadTechnologies,
  payload: data,
});
