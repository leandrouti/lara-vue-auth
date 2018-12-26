<template>
  
  <div>
    <h1> Welcome {{ user.name }} </h1>
    <p> Email: {{ user.email }} </p>
    <p> Joined At: {{ user.created_at }} </p>


  </div>
</template>

<script>
export default {
    data(){
      return {
        user : this.$route.params.user
      }
    }
}
</script>
