export const pets = (state) => {
  return state.pets;
};
export const petsAfterFiltre = (state) => {
  return state.petsAfterFiltre;
};

export const getCatsCount = (state) => {
  return state.pets.filter((pet) => pet.species === "Cat").length;
};

export const getDogsCount = (state) => {
  return state.pets.filter((pet) => pet.species === "Dog").length;
};
export const getPetsCount = (state) => {
  return state.pets.length;
};
