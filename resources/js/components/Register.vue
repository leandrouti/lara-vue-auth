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
        <input type="text" v-model="name" id="name" class="form-control" >
      </div>

      <div class="form-group" :class="{'has-error' : error && errors.email }">
        <label for="name">Email</label>
        <input type="email" v-model="email" id="email" class="form-control" placeholder="user@example.com" >
        <span class="help-block" v-if="error && errors.email">{{ errors.email }}</span>
      </div>

      <div class="form-group" :class="{ 'has-error' : error && errors.password }">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" class="form-control" >
        <span class="help-block" v-if="error && errors.password">{{ errors.password }}</span>

        <label for="password">Password Confirmation</label>
        <input type="password" v-model="password_confirmation" id="password_confirmation" class="form-control" >
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
      password_confirmation : '',
      error : false,
      errors : {},
      success : false,
    }
  },

  methods : {
    register(){
      var app = this;

      this.$auth.register({
        data: {
          url: '/auth/register',
          name : app.name,
          email : app.email,
          password : app.password,
          password_confirmation : app.password_confirmation,
        },

        success: function(){
          app.success = true;
        },
        error: function(resp){
          app.error = true;
          app.errors = resp.response.data.errors;
        },
        redirect : null
      });
    }
  }
}
</script>

