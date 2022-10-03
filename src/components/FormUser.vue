<template>
  <form class="row g-3 d-flex align-items-center justify-content-center">
    <div class="col-sm-5">
      <label class="form-label">Nome</label>
      <input
        type="text"
        class="form-control"
        placeholder="Nome completo..."
        required
        v-model="user.name"
      />
    </div>
    <div class="col-sm-5">
      <label class="form-label">Email</label>
      <input
        type="text"
        class="form-control"
        placeholder="Seu melhor email..."
        required
        v-model="user.email"
      />
    </div>
    <div class="col-sm-3">
      <label class="form-label">Telefone</label>
      <input
        type="text"
        class="form-control"
        placeholder="Telefone de contato com DDD..."
        required
        v-model="user.telephone"
      />
    </div>
    <div class="col-sm-3">
      <label class="form-label">Idade</label>
      <input
        type="number"
        class="form-control"
        placeholder="Informe sua idade..."
        required
        v-model="user.age"
      />
    </div>
    <div class="col-sm-4">
      <label class="form-label">Informe seu sexo</label>
      <select class="form-select" v-model="user.sex" required>
        <option selected disabled value="">Selecione</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
      </select>
    </div>
    <div class="col-sm-3 d-flex align-items-center justify-content-center mt-5">
      <button class="btn btn-primary" type="submit" @click="saveUser">
        Cadastrar usuário
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import config from "@/config/config";

export default {
  name: "FormUser",
  data() {
    return {
      user: {
        name: "",
        age: "",
        email: "",
        sex: "",
        telephone: "",
      }
    };
  },
  methods: {
    saveUser() {
      axios.post(`${config.url}/users`, this.user).then((response) => {
        let newUser = response.data
        this.$store.commit('saveUser', newUser)
      })
    }
  }
};
</script>