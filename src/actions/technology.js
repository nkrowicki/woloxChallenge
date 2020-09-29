import { types } from "../types/types";
import swal from "sweetalert";

export const startFetchTechnologies = () => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const res = await fetch(
        "http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs"
      );
      const data = await res.json();
      dispatch(loadTechnologies(data));
    } catch (error) {
      await swal("Error", "An error has occurred", "error");
    }
    dispatch(finishLoading());
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

export const startLoading = () => ({
  type: types.startLoadTechnologies,
});


export const finishLoading = () => ({
  type: types.endLoadTechnologies,
});

export const clearTechnologies = () => ({
  type: types.clearTechnologies,
});

export const orderTechnologies = () => ({
  type: types.orderTechnologies,
})