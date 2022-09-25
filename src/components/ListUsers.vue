<template>
  <div class="row mt-3">
    <div class="col">
      <ul class="list-group">
        <li class="list-group-item">
          {{users}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ListUsers',
    data() {
      return {
        users: []
      }
    },
    created() {
      fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(response => {
        this.users = response
      })
    }
}
</script>
