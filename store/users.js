export const state = () => ({
    users: []
})





export const getters = {
    users(state) {
        return state.users
    }
}






export const actions = {
    async loadUsers({ commit }) {//тут подгружаю сервер
        const users = await this.$axios.$get('/users')
        commit('setUsers', users)
    },//первый аргумент- название нужной мутации!
    async addUser({ commit }, user) {
        const newUser = await this.$axios.$post('/users', user)
        commit('addUser', newUser)
    },
    async deleteUser({ commit }, id) {
        await this.$axios.$delete(`/users/${id}`)
        commit('deleteUser', id)
    },
    async sortUsers({ commit }) {
        const sortUsers = await this.$axios.$get('/users?_sort=name&_order=ascusers')
        commit('sort', sortUsers)
    },
    async sortUsersUsername({ commit }) {
        const sortUsers = await this.$axios.$get('/users?_sort=username&_order=ascusers')
        commit('sort', sortUsers)
    },
    async sortEmail({ commit }) {
        const sortUsers = await this.$axios.$get('/users?_sort=email&_order=ascusers')
        commit('sort', sortUsers)
    },

}

export const mutations = {
    setUsers(state, users) {//тут установливаю загруженные данные
        //с сервера в мой state - users строка 1  2
        //в users я передаю commit
        state.users = users
    },
    addUser(state, user) {
        state.users.push(user)
    },
    deleteUser(state, id) {
        const index = state.users.findIndex(user => user.id === id)
        state.users.splice(index, 1)

    },
    sort(state, sortUsers) {
        state.users = sortUsers
    }
}
