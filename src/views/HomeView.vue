<template>
  <div>
    <navbar-header />
    <div class="d-flex justify-content-center align-items-center">
      <h1>Lista de usuários</h1>
    </div>
    <list-users />
  </div>
</template>

<script>
import ListUsers from '@/components/ListUsers.vue'
import NavbarHeader from '@/components/NavbarHeader.vue'

export default {
  name: 'HomeView',
  components: {
    ListUsers,
    NavbarHeader
  }
}
</script>