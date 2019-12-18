<template>
  <div>
    <table>
      <thead>
        <tr>
          <th class="nameSort">Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Delete user</th>
        </tr>
      </thead>
      <tbody>
        <UserListItem :user="user" v-for="user of users" :key="user.id" />
      </tbody>
    </table>
    <form @submit.prevent="onSubmit">
      <div>
        <label>
          <input v-model="newUser.name" type="text" placeholder="Name" />
        </label>
      </div>
      <div>
        <label>
          <input
            v-model="newUser.username"
            type="text"
            placeholder="UserName"
          />
        </label>
      </div>
      <div>
        <label>
          <input v-model="newUser.email" type="email" placeholder="Email" />
        </label>
      </div>
      <div>
        <label>
          <input v-model="newUser.phone" type="text" placeholder="Phone" />
        </label>
      </div>
      <div>
        <label>
          <input v-model="newUser.website" type="text" placeholder="Website" />
        </label>
      </div>
      <div>
        <label>
          <input
            v-model="newUser.address.city"
            type="text"
            placeholder="City"
          />
        </label>
      </div>
      <div>
        <label>
          <input
            v-model="newUser.address.street"
            type="text"
            placeholder="Street"
          />
        </label>
      </div>
      <div>
        <label>
          <input
            v-model="newUser.address.suite"
            type="text"
            placeholder="Suite"
          />
        </label>
      </div>
      <div>
        <label>
          <input
            v-model="newUser.address.zipcode"
            type="text"
            placeholder="ZipCode"
          />
        </label>
      </div>
      <div>
        <label>
          <input
            v-model="newUser.company.name"
            type="text"
            placeholder="Company name"
          />
        </label>
      </div>
      <div>
        <label>
          <input
            v-model="newUser.company.catchPhrase"
            type="text"
            placeholder="Company catch phrase "
          />
        </label>
      </div>
      <div>
        <label>
          <input
            v-model="newUser.company.bs"
            type="text"
            placeholder="Company bs"
          />
        </label>
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
import UserListItem from '~/components/UserListItem'

export default {
  name:'userstable',
  components: { UserListItem }, //регистрация компонента

  data: () => ({
    newUser: {
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
      address:{
        street: '',
        city: '',
        suite: '',
        zipcode: '',
      },
      company:{
        name: '',
        catchPhrase: '',
        bs: '',
      }
    }
  }),

  async fetch ({ store }){
    await store.dispatch('users/loadUsers')
  },
 
  computed: mapGetters ({
      users:'users/users'
    }),//такой способ если на странице небыло computed св-в 
  methods: {
     ...mapActions({
      addUser: 'users/addUser'
    }),
   // async 
    async onSubmit(){
      try{
        await this.addUser(this.newUser)
        
      } catch (e) {
        console.log(e)
      }
    }
   
  
  }     
  
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



// let users = []
//     try {
//       users = await $axios.$get('/users') //https://jsonplaceholder.typicode.com/users
//       console.log(users)
    
//     } 
//      catch (e) {
//        console.log(e.response)
//      }
     
//     return { users }