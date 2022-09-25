<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid" id="navbar">
      <a class="navbar-brand" href="#">Usuários cadastrados</a>
      <div class="d-flex justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Lista</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Adicionar</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarHeader",
};
</script>

<style scoped>
#navbar {
    padding: 0 5%;
}
</style>