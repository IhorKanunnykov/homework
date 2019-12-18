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
        await this.$axios.$get('/users')
        commit('setUsers', [1, 2, 345])
    }//первый аргумент- название нужной мутации!
}

export const mutations = {
    setUsers(state, users) {//тут установливаю загруженные данные
        //с сервера в мой state - users строка 1  2
        //в users я передаю commit
        state.users = users
    }
}
