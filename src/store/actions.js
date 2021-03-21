import axios from "axios";

export const fetchPets = ({ commit }) => {
  axios.get(`../../../data/pets-data.json`).then((response) => {
    commit("petsList", response.data.pets);
  });
};
