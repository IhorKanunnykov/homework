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
    <td>{{ user.website }}</td>
  </tr>
</template>

<script>
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
 
    
    created () {//этот код выполняется до построения dom-дерева,к нему не обратится,он срабатывает автоматом
      this.localUser = { ...this.user }
            //получил новый объект с полями,как у user
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