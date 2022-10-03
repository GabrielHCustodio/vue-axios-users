<template>
  <div>
    <ul
      v-if="users.length >= 1"
      class="list-group d-flex align-items-center justify-content-center mt-3"
    >
      <li
        class="list-group-item d-flex align-items-center"
        id="list"
        v-for="user in users"
        :key="user.id"
      >
        <span id="name">{{ user.name }}</span>
        <span id="age">{{ user.age }} anos</span>
        <span class="espacar"></span>
        <button
          class="btn btn-primary btn-sm"
          title="Mais informações"
          @click="$router.push({ name: 'user', params: {id: user.id} })"
        >
          <i class="fa fa-plus"></i>
        </button>
        <button
          class="btn btn-danger btn-sm"
          title="Deletar"
          @click="deletar(user)"
        >
          <i class="fa fa-trash"></i>
        </button>
      </li>
    </ul>

    <div
      v-else
      class="d-flex flex-column align-items-center justify-content-center mt-3"
    >
      <h4>Não existem usuários cadastrados...</h4>
      <router-link to="/about">Clique aqui para adicionar</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config/config";
import { mapState } from "vuex";

export default {
  name: "ListUsers",
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
  },
  methods: {
    deletar(user) {
      axios.delete(`${config.url}/users/${user.id}`, user).then((response) => {
        const index = this.users.findIndex((u) => u.id === user.id);
        this.users.splice(index, 1);
        console.log(response);
      });
    },
  },
};
</script>

<style scoped>
#list {
  width: 40%;
}

#name,
#age {
  width: 50%;
}

.espacar {
  flex: 1 1 auto;
}

button {
  margin-right: 8px;
}
</style>