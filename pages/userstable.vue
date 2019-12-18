<template>
  <table>
    <thead>
      <tr>
        <th class="nameSort">Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
      </tr>
    </thead>
    <tbody>
      <UserListItem :user="user" v-for="user of users" :key="user.id" />
    </tbody>
  </table>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import UserListItem from '~/components/UserListItem'

export default {
  name:'userstable',
  components: { UserListItem }, //регистрация компонента
  async asyncData ({ $axios }){
    let users = []
    try {
      users = await $axios.$get('https://jsonplaceholder.typicode.com/users') //https://jsonplaceholder.typicode.com/users
      console.log(users)
    
    } 
     catch (e) {
       console.log(e.response)
     }
     
    return { users }
  },
  props:{
    user:{
      type: Object,
      required:true
    }
  },
   computed: mapGetters ({
        myUsers:'users'
      }),//такой способ если на странице небыло computed св-в 
      created() {
        this.loadUsers()
      },     
      methods: mapActions({
        loadUsers: 'loadUsers'
      })
  
}
</script>

<style scoped>
    table {
        border-collapse: collapse;
        border: 2px solid rgb(200,200,200);
        letter-spacing: 1px;
        font-size: 0.8rem;
        margin: 0 auto;
        }

        td, th {
         border: 1px solid rgb(190,190,190);
        padding: 10px 20px;
        }

        td {
        text-align: center;
        cursor:default;
        }
</style>