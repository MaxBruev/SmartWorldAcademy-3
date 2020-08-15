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
                <p>
                    <label>
                        <input type="checkbox" />
                        <span>С правилами согласен</span>
                    </label>
                </p>
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
             async onReg({dispatch}, {email, password, name}) {
                 try {
                     await firebase.auth().createUserWithEmailAndPassword(email, password);
                     const uid = await dispatch('getUid');
                     await firebase.database().ref('/user/${uid}/info').set({
                         name
                     })
                 } catch(e) {
                     throw e
                 }
             },
             getUid() {
                 const userId = firebase.auth().currentUser;
                 return userId ? userId.uid : null
             },
             async logOk() {
                 try{
                 await  this.$store.dispatch('register', data);
                this.$store.commit('authCorr');
                this.$store.commit('actUser');
                await this.$router.push('todo');
                 } catch (e) {}
            }
        }
    }
</script>