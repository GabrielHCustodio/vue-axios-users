<template>
  <div>
    <div class="d-flex align-items-center justify-content-between m-4 mb-5">
      <h1>Mais dados de: {{ user.name }}</h1>
      <button
        class="btn btn-danger btn-sm"
        title="Fechar"
        @click="$router.push('/')"
      >
        <i class="fa-solid fa-x"></i>
      </button>
    </div>

    <div class="d-flex align-items-center justify-content-center mt-5">
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item fs-5"><b>Nome:</b> {{user.name}}</li>
          <li class="list-group-item fs-5"><b>Idade:</b> {{user.age}} anos</li>
          <li class="list-group-item fs-5"><b>E-mail:</b> {{user.email}}</li>
          <li class="list-group-item fs-5"><b>Sexo:</b> {{user.sex}}</li>
          <li class="list-group-item fs-5"><b>Telefone:</b> {{user.telephone}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config/config";

export default {
  name: "DataUser",
  data() {
    return {
      user: "",
    };
  },
  created() {
    const url = `${config.url}/users/${this.$route.params.id}`;
    axios.get(url).then((response) => {
      this.user = response.data;
    });
  },
};
</script>