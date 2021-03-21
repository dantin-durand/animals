<template>
  <div class="row">
    <router-link
      v-for="pet in petsAfterFiltre"
      :key="pet.name"
      :to="{
        name: 'Pet',
        params: {
          species: `${this.formatSpeciesParam(pet.species)}`,
          id_pet: `${pets.indexOf(pet)}`,
          pet_name: pet.name,
          pet_birthYear: pet.birthYear,
        },
      }"
      class="col-4"
      exact
    >
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">{{ pet.name }} ({{ pet.birthYear }})</h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["species"],
  name: "AnimalList",

  computed: {
    ...mapGetters({
      pets: "pets",
      petsAfterFiltre: "petsAfterFiltre",
    }),
  },
  watch: {
    $route(to) {
      this.$store.commit("filterPets", to.params.species);
    },
  },

  methods: {
    ...mapActions({
      addPetToList: "addPetToList",
    }),
    formatSpeciesParam(species) {
      const formatedSpecies = species.toLowerCase() + "s";
      return formatedSpecies;
    },
  },
};
</script>

<style>
</style>
