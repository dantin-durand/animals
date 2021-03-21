<template>
  <div class="container row">
    <div class="col-12 col-md-4 species">
      <span>
        <i class="fas fa-cat" v-if="species === 'cats'"></i>
        <i class="fas fa-dog" v-if="species === 'dogs'"></i>
      </span>
    </div>
    <div class="col-12 col-md-8">
      <h1>
        {{ pets ? pets[id_pet].name : pet_name }} -
        {{ pets ? pets[id_pet].birthYear : pet_birthYear }}
      </h1>
      <p class="lead" v-if="species === 'cats'">Chat</p>
      <p class="lead" v-if="species === 'dogs'">Chien</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "GetPet",
  props: ["species", "id_pet", "pet_name", "pet_birthYear"],
  computed: {
    ...mapGetters({
      pets: "pets",
    }),
  },
  watch: {
    $route(to) {
      if (to.path === "/") {
        this.$store.commit("filterPets", "all");
      }
      if (to.path === "/cats") {
        this.$store.commit("filterPets", "cats");
      }
      if (to.path === "/dogs") {
        this.$store.commit("filterPets", "dogs");
      }
    },
  },
};
</script>

<style>
.species {
  display: flex;
  align-items: center;
  justify-content: center;
}
.species > span {
  background: rgb(233, 233, 233);
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
}
</style>