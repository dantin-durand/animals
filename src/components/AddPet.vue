<template>
  <div
    class="modal fade"
    id="addPetModal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    ref="modalRef"
  >
    <div class="modal-dialog" role="document">
      <form class="" @submit.prevent="addPet">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Ajouter un animal
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body row m-1">
            <div
              class="alert alert-dismissible alert-danger col-12"
              v-for="(error, index) in errors"
              :key="index"
            >
              <p class="mb-0">
                {{ error }}
              </p>
            </div>
            <div class="form-group col-12">
              <label for="name">Nom de l'animal</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Saisissez le nom de l'animal"
                v-model="pet.name"
              />
            </div>
            <div class="form-group col-6">
              <label for="species">Espèce de l'animal</label>
              <select class="form-control" id="species" v-model="pet.species">
                <option value="Dog">Chien</option>
                <option value="Cat">Chat</option>
              </select>
            </div>
            <div class="form-group col-6">
              <label for="birthYear">Année de naissance</label>
              <input
                type="number"
                class="form-control"
                name="birthYear"
                id="birthYear"
                placeholder="ex: 2016"
                min="2000"
                v-model="pet.birthYear"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Fermer
            </button>
            <button type="submit" class="btn btn-success">
              Ajouter un animal
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "addPet",
  data() {
    return {
      pet: {
        name: "",
        birthYear: 2000,
        species: "Cat",
      },
      errors: [],
    };
  },

  methods: {
    addPet() {
      this.errors = [];
      if (
        this.pet.name.length <= 2 ||
        this.pet.birthYear > new Date().getFullYear() ||
        (this.pet.species !== "Cat" && this.pet.species !== "Dog")
      ) {
        this.pet.name.length <= 2 &&
          this.errors.push("Veuillez saisir un nom.");
        this.pet.birthYear > new Date().getFullYear() &&
          this.errors.push(
            "Veuillez entrer une année passé ou égale à cette année"
          );
        if (this.pet.species !== "Cat" && this.pet.species !== "Chien")
          this.errors.push("Veuillez sélectionner un chien ou un chat");
      } else {
        this.$store.commit("addPetToList", this.pet);
        this.pet = {
          name: "",
          birthYear: 2000,
          species: "Cat",
        };
        this.errors = [];
        $("#addPetModal").fadeOut("fast");
        $(".modal-backdrop").fadeOut("fast");
      }
    },
  },
};
</script>

<style>
</style>