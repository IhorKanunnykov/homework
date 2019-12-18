<template>
  <div>
    <h3>{{ user.name }}</h3>
    <div>
      <strong>Address:</strong>
      <p>City -{{ user.address.city }}</p>
      <p>Street -{{ user.address.street }}</p>
      <p>Suite -{{ user.address.suite }}</p>
      <p>Zipcode -{{ user.address.zipcode }}</p>
    </div>
    <div>
      <strong>Company:</strong>
      <p>Name -{{ user.company.name }}</p>
      <p>CatchPhrase -{{ user.company.catchPhrase }}</p>
      <p>Bs -{{ user.company.bs }}</p>
    </div>

    {{ myUsers }}
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
//mapGetters через computed: mapGetters   смотри ниже
//mapActions через methods и created  смотри ниже
export default {
    name:'User',
    // created () {//этот код выполняется до построения dom-дерева,к нему не обратится,он срабатывает автоматом
    //   this.localUser = { ...this.user },
            //получил новый объект с полями,как у user
    async asyncData ({ $axios, params }){
    let user = {}
    try {
      user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    
     } 
     catch (e) {
       console.log(e.response)
     }
     //console.log(users)
        return { user }
      },
      // computed: {
      //  ...mapGetters({
      //    myUsers:'users'
      //  })
      // такой способ для подключения computed св-в 
      // если тут уже подключены такие свойства
      // myUsers-имячто работает в рамках этой страницы
      // users- имя getter в store/index.js
      // }    
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

</style>