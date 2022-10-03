<template>
  <div>
    <navbar-header />
    <div class="d-flex justify-content-center align-items-center mt-3">
      <h1>Lista de usuários</h1>
    </div>
    <list-users />
  </div>
</template>

<script>
import axios from "axios";
import config from "@/config/config";
import { mapMutations } from 'vuex';

import ListUsers from '@/components/ListUsers.vue'
import NavbarHeader from '@/components/NavbarHeader.vue'

export default {
  name: 'HomeView',
  components: {
    ListUsers,
    NavbarHeader
  },
  methods: {
    ...mapMutations(['setUsers'])
  },
  created() {
    axios.get(`${config.url}/users`).then((response) => {
      this.setUsers(response.data)
    });
  }
}
</script>