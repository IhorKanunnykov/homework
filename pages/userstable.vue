<template>
  <div>
    <table>
      <thead>
        <tr>
          <th @click.prevent="onSort()">Name</th>
          <th @click.prevent="onSortUsername()">Username</th>
          <th @click.prevent="onSortEmail()">Email</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Delete user</th>
        </tr>
      </thead>
      <tbody>
        <UserListItem :user="user" v-for="user of users" :key="user.id" />
      </tbody>
    </table>
    <validation-observer ref="newUserForm" v-slot="{ handleSubmit }" tag="div">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <validation-provider
          v-slot="{ classes, errors }"
          name="name"
          rules="required"
          tag="div"
        >
          <label>
            <input
              v-model="newUser.name"
              :class="classes"
              type="text"
              placeholder="Name"
            />
          </label>
          <p v-for="error of errors" :key="error">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <validation-provider
          v-slot="{ classes, errors }"
          name="username"
          rules="required"
          tag="div"
        >
          <label>
            <input
              v-model="newUser.username"
              type="text"
              placeholder="UserName"
            />
          </label>
          <p v-for="error of errors" :key="error">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <validation-provider
          v-slot="{ classes, errors }"
          name="Email"
          rules="required|email"
          tag="div"
        >
          <label>
            <input v-model="newUser.email" type="email" placeholder="Email" />
          </label>
          <p v-for="error of errors" :key="error">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <validation-provider
          v-slot="{ classes, errors }"
          name="Phone"
          rules="required"
          tag="div"
        >
          <label>
            <input v-model="newUser.phone" type="text" placeholder="Phone" />
          </label>
          <p v-for="error of errors" :key="error">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <validation-provider
          v-slot="{ classes, errors }"
          name="Website"
          rules="required"
          tag="div"
        >
          <label>
            <input
              v-model="newUser.website"
              type="text"
              placeholder="Website"
            />
          </label>
          <p v-for="error of errors" :key="error">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <validation-provider
          v-slot="{ classes, errors }"
          name="City"
          rules="required"
          tag="div"
        >
          <label>
            <input
              v-model="newUser.address.city"
              type="text"
              placeholder="City"
            />
          </label>
          <p v-for="error of errors" :key="error">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <validation-provider
          v-slot="{ classes, errors }"
          name="Street"
          rules="required"
          tag="div"
        >
          <label>
            <input
              v-model="newUser.address.street"
              type="text"
              placeholder="Street"
            />
          </label>
          <p v-for="error of errors" :key="error">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <validation-provider
          v-slot="{ classes, errors }"
          name="Suite"
          rules="required"
          tag="div"
        >
          <label>
            <input
              v-model="newUser.address.suite"
              type="text"
              placeholder="Suite"
            />
          </label>
          <p v-for="error of errors" :key="error">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <validation-provider
          v-slot="{ classes, errors }"
          name="ZipCode"
          rules="required"
          tag="div"
        >
          <label>
            <input
              v-model="newUser.address.zipcode"
              type="text"
              placeholder="ZipCode"
            />
          </label>
          <p v-for="error of errors" :key="error">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <validation-provider
          v-slot="{ classes, errors }"
          name="Company name"
          rules="required"
          tag="div"
        >
          <label>
            <input
              v-model="newUser.company.name"
              type="text"
              placeholder="Company name"
            />
          </label>
          <p v-for="error of errors" :key="error">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <validation-provider
          v-slot="{ classes, errors }"
          name="Company catch phrase"
          rules="required"
          tag="div"
        >
          <label>
            <input
              v-model="newUser.company.catchPhrase"
              type="text"
              placeholder="Company catch phrase "
            />
          </label>
          <p v-for="error of errors" :key="error">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <validation-provider
          v-slot="{ classes, errors }"
          name="Company bs"
          rules="required"
          tag="div"
        >
          <label>
            <input
              v-model="newUser.company.bs"
              type="text"
              placeholder="Company bs"
            />
          </label>
          <p v-for="error of errors" :key="error">
            <span class="error">{{ error }}</span>
          </p>
        </validation-provider>
        <button type="submit">Create</button>
      </form>
    </validation-observer>
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
      addUser: 'users/addUser',
      sort: 'users/sortUsers',
      sortUsername: 'users/sortUsersUsername',
      sortEmail: 'users/sortEmail'
    }),
   // async 
    async onSubmit(){
      if (await this.$refs.newUserForm.validate()){
          try{
          await this.addUser(this.newUser)
          
        } catch (e) {
          console.log(e)
        }
      }  
    },
    async onSort () {
      try{
        await this.sort('users/sortUsers')
      } catch(e){
        console.log(e)
      }
    },
    async onSortUsername () {
      try{
        await this.sortUsername('users/sortUsersUsername')
      } catch(e){
        console.log(e)
      }
    },
    async onSortEmail () {
      try{
        await this.sortEmail('users/sortEmail')
      } catch(e){
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
        .error{
          color:#8B0000;
          font-size: 10px;
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