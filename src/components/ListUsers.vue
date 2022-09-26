<template>
  <div>
    <ul class="list-group d-flex align-items-center justify-content-center">
      <li
        class="list-group-item d-flex align-items-center"
        id="list"
        v-for="user in users"
        :key="user.id"
      >
        <span id="name">{{ user.name }}</span>
        <span id="age">{{ user.age }} anos</span>
        <span class="espacar"></span>
        <button class="btn btn-primary btn-sm" title="Editar">
          <i class="fa fa-pencil-alt"></i>
        </button>
        <button class="btn btn-danger btn-sm" title="Deletar">
          <i class="fa fa-trash"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config/config";

export default {
  name: "ListUsers",
  data() {
    return {
      users: [],
    };
  },
  created() {
    axios.get(`${config.url}/users`).then((response) => {
      this.users = response.data;
    });
  },
};
</script>

<style scoped>
#list {
  width: 40%;
}

#name, #age {
  width: 50%;
}

.espacar {
  flex: 1 1 auto;
}

button {
  margin-right: 8px;
}
</style>