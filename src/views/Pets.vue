<template>
  <div class="container">
    <h1 v-if="species === 'cats'"><i class="fas fa-cat"></i> Chats</h1>
    <h1 v-if="species === 'dogs'"><i class="fas fa-dog"></i> Chiens</h1>
    <br />

    <AnimalList :species="this.species" />
  </div>
</template>

<script>
import AnimalList from "../components/AnimalList";
export default {
  components: { AnimalList },
  props: ["species", "id_pet"],
  name: "Pets",
  created() {
    if (this.species !== "dogs" && this.species !== "cats") {
      return this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style>
</style>