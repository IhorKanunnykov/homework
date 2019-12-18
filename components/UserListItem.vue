<template>
  <tr>
    <td>
      <!-- v-for="user of users" :key="user.id" -->
      <nuxt-link
        :to="{ name: 'user', params: { lang: 'en', id: user.id } }"
        exact
      >
        {{ user.name }}
      </nuxt-link>
    </td>
    <td>{{ user.username }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.phone }}</td>
    <td>
      <a :href="`http://${user.website}`" target="_blank">{{ user.website }}</a>
    </td>
    <td><button @click.prevent="onDelete(user.id)">Delete</button></td>
  </tr>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
//import user from '~/pages/user'
export default {
    name: 'UserListItem',
    //components: { user },

     props:{
         user:{
             type: Object,
             required: true
             
        }
    },
    // created () {//этот код выполняется до построения dom-дерева,к нему не обратится,он срабатывает автоматом
    //   this.localUser = { ...this.user }
    //         //получил новый объект с полями,как у user
    // },
    
    methods: {
      ...mapActions({
        deleteUser: 'users/deleteUser'
      }),
      async onDelete (id){
        try{
          if (window.confirm('You want to delete this user?')){
          await this.deleteUser(id)
          }
        }catch (e) {
          console.log(e)
        }  
      }
    }
}    

</script>

<style scoped>

    td, th {
         border: 1px solid rgb(190,190,190);
        padding: 10px 20px;
        }

        td {
        text-align: center;
        cursor:default;
        }

</style>