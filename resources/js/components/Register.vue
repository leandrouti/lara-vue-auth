<template>
  <div>
    <div class="alert alert-danger" v-if="error && !success">
      <p>There was an error, unable to complete registration.</p>
    </div>

    <div class="alert alert-success" v-if="success">
      <p>Registration completed. You can now <router-link :to="{name:'login'}">sign in.</router-link></p>
    </div>

    <form action="" autocomplete="off" @submit.prevent="register" method="post" v-if="!success">
      <div class="form-group" v-bind:class="{ 'has-error' : error && errors.name }">
        <label for="name">Name</label>
        <input type="text" :name="name" id="name" class="form-control" required>
      </div>

      <div class="form-group" :class="{'has-error' : error && errors.email }">
        <label for="name">Email</label>
        <input type="email" v-model="email" id="email" class="form-control" placeholder="user@example.com" required>
        <span class="help-block" v-if="error && errors.email">{{ errors.email }}</span>
      </div>

      <div class="form-group" :class="{ 'has-error' : error && errors.password }">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" class="form-control" required>
        <span class="help-block" v-if="error && errors.password">{{ errors.password }}</span>
      </div>

      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name : '',
      email : '',
      password : '',
      errors : {},
      error : false,
      success : false,
    }
  },

  methods : {
    register(){
      console.log('register')
      this.success = true;
    }
  }
}
</script>

