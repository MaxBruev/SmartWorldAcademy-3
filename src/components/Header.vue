<template>
    <div>
        <header class="header_todo">
            <h1 class="h1-todo">ToDo-list</h1>
            <div class="Exit_mail" v-if="this.$store.state.user">
                {{this.$store.state.user}}
                <button class="logout" @click.prevent="logout">Выйти</button>
            </div>
            <div v-else class="message notLog">
                Вы не авторизовались
                <router-link to="/login">Авторизоваться</router-link>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        methods: {
            async logout() {
                await this.$store.dispatch('logout');
                await this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/index.css";
</style>