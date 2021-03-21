<template>
  <div class="container">
    <Statisticals />
    <br />
    <br />
    <h2 class="text-center">Liste des animaux</h2>
    <br />
    <AnimalList :species="all" />
  </div>
</template>

<script>
// @ is an alias to /src

import AnimalList from "@/components/AnimalList";
import Statisticals from "../components/Statisticals";

export default {
  name: "Home",
  components: {
    AnimalList,
    Statisticals,
  },
  mounted() {
    this.$store.commit("updatePetCount", "cats");
    this.$store.commit("updatePetCount", "dogs");
    this.$store.commit("updatePetCount");
  },
  /*   watch: {
    $route(to, from) {
      if(from.params.species === 'dogs' || from.params.species === 'cats' ) {
        this.$store.commit("updatePetCount", "cats");
        this.$store.commit("updatePetCount", "dogs");
        this.$store.commit("updatePetCount");
      }
    },
  }, */
};
</script>
