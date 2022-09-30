<template>
  <form class="row g-3 d-flex align-items-center justify-content-center">
    <div class="col-sm-5">
      <label class="form-label">Nome</label>
      <input
        type="text"
        class="form-control"
        placeholder="Nome completo..."
        required
        v-model="user.nameUser"
      />
    </div>
    <div class="col-sm-5">
      <label class="form-label">Email</label>
      <input
        type="text"
        class="form-control"
        placeholder="Seu melhor email..."
        required
        v-model="user.emailUser"
      />
    </div>
    <div class="col-sm-3">
      <label class="form-label">Telefone</label>
      <input
        type="text"
        class="form-control"
        placeholder="Telefone de contato com DDD..."
        required
        v-model="user.telephoneUser"
      />
    </div>
    <div class="col-sm-3">
      <label class="form-label">Idade</label>
      <input
        type="number"
        class="form-control"
        placeholder="Informe sua idade..."
        required
        v-model="user.ageUser"
      />
    </div>
    <div class="col-sm-4">
      <label class="form-label">Informe seu sexo</label>
      <select class="form-select" v-model="user.sexUser" required>
        <option selected disabled value="">Selecione</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
      </select>
    </div>
    <div class="col-sm-3 d-flex align-items-center justify-content-center mt-5">
      <button class="btn btn-primary" type="submit" @click="saveUser">Cadastrar usuário</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormUser",
  data() {
    return {
      user: {
        nameUser: "",
        ageUser: "",
        emailUser: "",
        sexUser: "",
        telephoneUser: "",
      }
    };
  },
  methods: {
    saveUser() {
      console.log(this.user)
    }
  }
};
</script>