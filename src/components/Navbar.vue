<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark pl-5 pr-5 mb-5">
    <a class="navbar-brand" href="#"
      ><i class="fas fa-feather"></i> Pets Management
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor02"
      aria-controls="navbarColor02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link" exact
            >Accueil</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'Pets', params: { species: 'cats' } }"
            class="nav-link"
            exact
            >Chats</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'Pets', params: { species: 'dogs' } }"
            class="nav-link"
            exact
            >Chiens</router-link
          >
        </li>
      </ul>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#addPetModal"
      >
        Ajouter un animal
      </button>
    </div>
  </nav>
  <AddPet />
  <router-view />
</template>

<script>
import AddPet from "./AddPet";
export default {
  name: "Navbar",
  components: { AddPet },
};
</script>

<style>
</style>