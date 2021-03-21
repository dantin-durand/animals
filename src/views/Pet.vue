<template>
  <GetPet class="container" :id_pet="this.id_pet" :species="this.species" />
</template>

<script>
import GetPet from "../components/GetPet";
export default {
  components: { GetPet },
  props: ["species", "id_pet"],
  name: "Pet",
  created() {
    if (this.species !== "dogs" && this.species !== "cats") {
      return this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style>
</style>