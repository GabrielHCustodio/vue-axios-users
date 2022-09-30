<template>
  <div>
    <navbar-header />
    <div class="d-flex align-items-center justify-content-center mt-3">
      <div>
        <h1 class="text-center mb-3">Cadastrar Usuário</h1>
        <form-user/>
      </div>
    </div>
  </div>
</template>

<script>
import FormUser from "@/components/FormUser.vue";
import NavbarHeader from "@/components/NavbarHeader.vue";

export default {
  name: "AboutView",
  components: {
    FormUser,
    NavbarHeader,
  },
};
</script>