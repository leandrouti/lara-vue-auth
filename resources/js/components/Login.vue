<template>
  <div>
    <div class="alert alert-danger" v-if="error">
      <p>There was an error, unable to sign in with those credentials.</p>
    </div>

    <form action="" autocomplete="off" @submit.prevent="login" method="post">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" v-model="email" id="email" class="form-control" placeholder="user@example.com" required>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" class="form-control" required>
      </div>

      <button type="submit" class="btn btn-default">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      error : false,
      email : '',
      password: ''
    }
  },

  methods : {
    login(){
      console.log('login')
    }
  }
}
</script>
