<template>
  <div class="row">
    <div class="col-12 col-md-4">
      <h1 class="text-center"><i class="fas fa-cat"></i></h1>
      <h2 class="text-center">{{ Catscount }}</h2>
      <p class="lead text-center">Chats</p>
    </div>
    <div class="col-12 col-md-4">
      <h1 class="text-center"><i class="fas fa-paw"></i></h1>
      <h2 class="text-center">{{ Petscount }}</h2>
      <p class="lead text-center">Animaux</p>
    </div>
    <div class="col-12 col-md-4">
      <h1 class="text-center"><i class="fas fa-dog"></i></h1>
      <h2 class="text-center">{{ Dogscount }}</h2>
      <p class="lead text-center">Chiens</p>
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
export default {
  name: "Statisticals",
    computed: {
    ...mapGetters({
      Catscount: "getCatsCount",
      Dogscount: "getDogsCount",
      Petscount: "getPetsCount",
    }),
  },
};
</script>

<style>
</style>