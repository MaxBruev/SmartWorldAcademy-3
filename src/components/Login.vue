<template>
    <div class="light-blue empty-layout">
    <form class="card auth-card" v-on:submit.prevent="onLog">
        <div class="card-content">
            <span class="card-title">Авторизация</span>
            <div class="input-field">
                <input
                        id="email"
                        type="email"
                        v-model="login"
                        v-bind:class="{error: this.$store.state.logError}"
                >
                <label for="email">Email</label>
                <small
                        class="helper-text"
                >Email</small>
            </div>
            <div class="input-field">
                <input
                        id="password"
                        type="password"
                        v-model="password"
                        v-bind:class="{error: this.$store.state.logError}"
                >
                <label for="password">Пароль</label>
                <small
                        class="helper-text"
                >Password</small>
                <div style="color: red"
                     v-if="this.$store.state.logError"
                >Вы ввели не верный логин или пароль</div>

            </div>
        </div>
        <div class="card-action">
            <div>
                <button class="btn waves-effect waves-light auth-submit" type="submit" style="background-color: #00bcd4">
                    Войти
                </button>
            </div>
            <p class="center">
                Нет аккаунта?
                <router-link to="/register">Зарегистрироваться</router-link>
            </p>
        </div>
    </form>
    </div>
</template>

<script>
    import * as firebase from 'firebase/app';
    import "firebase/auth";

    export default {
        name: 'Login',
        data: () => ({
            login: '',
            password: ''
        }),
        methods: {
            onLog() {
                firebase.auth().signInWithEmailAndPassword(this.login, this.password)
                    .then(() => {
                        this.logOk();
                    })
                    .catch(() => {
                        this.$store.commit('Error');
                    });
            },
            logOk() {
                this.$store.commit('Auth');
                this.$store.commit('actUser');
                this.$router.push('todo');
            }
        }
    }
</script>

<style lang="scss">
    @import "~materialize-css/dist/css/materialize.min.css";
    @import "../assets/index.css";
</style>