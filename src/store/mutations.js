export const petsList = (state, pets) => {
  state.pets = pets;
  filterPets(state, "all");
};
export const addPetToList = (state, pet) => {
  state.pets.push(pet);
};

const PetsFilter = (state, species) => {
  return state.pets.filter((pet) => pet.species === species);
};

export const filterPets = (state, species) => {
  switch (species) {
    case "cats":
      state.petsAfterFiltre = PetsFilter(state, "Cat");
      break;
    case "dogs":
      state.petsAfterFiltre = PetsFilter(state, "Dog");
      break;
    default:
      state.petsAfterFiltre = state.pets;
      break;
  }
};

export const updatePetCount = (state, species) => {
  switch (species) {
    case "dogs":
      state.Dogscount = state.pets.filter(
        (pet) => pet.species === species
      ).length;
      break;
    case "cats":
      state.Catscount = state.pets.filter(
        (pet) => pet.species === species
      ).length;
      break;
    default:
      state.Petscount = state.pets.length;
      break;
  }
};
