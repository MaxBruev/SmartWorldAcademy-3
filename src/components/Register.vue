<template>
    <div class="light-blue darken-1 empty-layout">
        <form class="card auth-card"  v-on:submit.prevent="onReg">
            <div class="card-content">
                <span class="card-title">Регистрация</span>
                <div class="input-field">
                    <input
                            id="email"
                            type="text"
                            v-model="email"
                            v-bind:class="{error: this.$store.state.logError}"
                    >
                    <label for="email">Email</label>
                    <small class="helper-text invalid">Email</small>
                </div>
                <div class="input-field">
                    <input
                            id="password"
                            type="password"
                            v-model="password"
                            v-bind:class="{error: this.$store.state.logError}"
                    >
                    <label for="password">Пароль</label>
                    <small class="helper-text invalid">Password</small>
                </div>
                <div class="input-field">
                    <input
                            id="name"
                            type="text"
                            v-model="name"
                            v-bind:class="{error: this.$store.state.logError}"
                    >
                    <label for="name">Имя</label>
                    <small class="helper-text invalid">Name</small>
                </div>
                <label>
                    <input type="checkbox" v-bind:class="{error: this.$store.state.logError}"/>
                    <span>С правилами согласен</span>
                </label>
                <div style="color: red" v-if="this.$store.state.logError">Вы ввели не верные данные</div>
            </div>
            <div class="card-action">
                <div>
                    <button class="btn waves-effect waves-light auth-submit" type="submit" style="background-color: #00bcd4">Зарегистрироваться
                    </button>
                </div>
                <p class="center">
                    Уже есть аккаунт?
                    <router-link to="/login">Войти!</router-link>
                </p>
            </div>
        </form>
    </div>

</template>


<script>
    import firebase from 'firebase/app';
    import "firebase/auth";

    export default {
        data: () => ({
            name: '',
            email: '',
            password: ''
        }),
         methods: {
             onReg() {
                 firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                     .then(() => {
                         this.logOk();
                     })
                     .catch((err) => {
                         this.$store.commit('authErr', err);
                     });
             },
             async logOk() {
                 this.$store.commit('Auth');
                 this.$store.commit('actUser');
                 await this.$router.push('todo');
            }
        }
    }
</script>

<style lang="scss">
    @import "~materialize-css/dist/css/materialize.min.css";
    @import "../assets/index.css";
</style>