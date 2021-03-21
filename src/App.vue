<template>
  <Navbar />
</template>
<script>
import { mapActions } from "vuex";
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
  created() {
    this.fetchPets();
  },
  methods: {
    ...mapActions({
      fetchPets: "fetchPets",
    }),
  },
};
</script>
