<template>
  <form class="col">
    <div>
      <label class="form-label">Nome</label>
      <input type="text" class="form-control" required />
    </div>
    <div>
      <label class="form-label">Email</label>
      <input type="text" class="form-control" required />
    </div>
    <div>
      <label class="form-label">Telefone</label>
      <input type="text" class="form-control" required />
    </div>
    <div>
      <label class="form-label">Informe o sexo</label>
      <select class="form-select" required>
        <option selected disabled value="">Selecione</option>
        <option>Masculino</option>
        <option>Feminino</option>
        <option>Prefiro não informar</option>
      </select>
    </div>
    <div>
      <label class="form-label">Idade</label>
      <input type="number" class="form-control" required />
    </div>
    <div class="mt-3">
      <button class="btn btn-primary" type="submit">Adicionar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormUser",
};
</script>