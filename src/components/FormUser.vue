<template>
  <form class="row g-3 d-flex align-items-center justify-content-center">
    <div class="col-sm-5">
      <label class="form-label">Nome</label>
      <input
        type="text"
        class="form-control"
        placeholder="Nome completo..."
        required
        v-model.trim="v$.user.name.$model"
        :class="{ 'is-invalid': v$.user.name.$error }"
      />
    </div>
    <div class="col-sm-5">
      <label class="form-label">Email</label>
      <input
        type="text"
        class="form-control"
        placeholder="Seu melhor email..."
        v-model.trim="v$.user.email.$model"
        :class="{ 'is-invalid': v$.user.email.$error }"
      />
    </div>
    <div class="col-sm-3">
      <label class="form-label">Telefone</label>
      <input
        type="text"
        class="form-control"
        placeholder="Telefone de contato com DDD..."
        v-model.trim="v$.user.telephone.$model"
        :class="{ 'is-invalid': v$.user.telephone.$error }"
      />
    </div>
    <div class="col-sm-3">
      <label class="form-label">Idade</label>
      <input
        type="number"
        class="form-control"
        placeholder="Informe sua idade..."
        v-model.trim="v$.user.age.$model"
        :class="{ 'is-invalid': v$.user.age.$error }"
      />
    </div>
    <div class="col-sm-4">
      <label class="form-label">Informe seu sexo</label>
      <select 
        class="form-select"
        v-model.trim="v$.user.sex.$model"
        :class="{ 'is-invalid': v$.user.sex.$error }"
      >
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

import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email, between } from "@vuelidate/validators"

export default {
  name: "FormUser",
  setup: () => ({ v$: useVuelidate() }),
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
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(3)
      },
      age: {
        required,
        between: between(18, 99)
      },
      email: {
        required,
        email
      },
      sex: {
        required,
      },
      telephone: {
        required,
      }
    }
  },
  methods: {
    saveUser() {
      this.validationForm()
      axios.post(`${config.url}/users`, this.user).then((response) => {
        let newUser = response.data
        this.$store.commit('saveUser', newUser)
      })
    },
    validationForm() {
      this.v$.$touch();
      if (this.v$.$error) {
        return;
      }
    }
  }
};
</script>