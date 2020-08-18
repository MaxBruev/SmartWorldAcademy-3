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
        components: {
        },
        methods: {
            async logout() {
                await this.$store.dispatch('logout');
                await this.$router.push('/login')
            }
        }
    }
</script>

<style>
    .header_todo {
        height: 78px;
        background-color: #00bcd4;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        border-bottom: 1px solid #535353;
        width: 100%;
        position: relative;
    }
    .h1-todo {
        padding: 7px 30px;
        font-size: 30px;
        margin: 0;
    }
    .Exit_mail {
        position: absolute;
        top: 20px;
        right: 0;
    }
    .logout {
        outline: 0;
        background-color: #4CAF50;
        border: none;
        padding: 5px 15px;
        color: #fff;
        margin: 0 15px;
    }
    .notLog {
        color: #ffffff;
        margin: 0 15px;
        font-size: 16px;
    }
    .notLog a {
        color: #ffffff;
        font-size: 16px;
        font-weight: 600;
        margin-left: 20px;
    }
</style>