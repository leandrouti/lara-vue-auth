<template>
  <div>

    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="{name:'user-detail', params : { id : user.id, user: user }}">{{ user.name }}</router-link>
      </li>

    </ul>

  </div>
</template>

<script>
export default {
  data(){
    return {
      users : null,
    }
  },

  methods : {
    login(){
      
    }
  },
  created(){
    this.$auth.fetch({
      url : '/user',
      success : function(resp){
        this.users = resp.data.users;
        
        console.log(resp)
      },

      error : function(resp) {
        console.log(resp)
      }
    })
  }
}
</script>
