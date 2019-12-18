<template>
  <ul>
    <li>
      <nuxt-link :to="{ name: 'home', params: { lang: 'en' } }" exact>
        Home
      </nuxt-link>
    </li>
    <li>
      <nuxt-link :to="{ name: 'userstable', params: { lang: 'en' } }" exact>
        Users table
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>

<style scoped>

</style>