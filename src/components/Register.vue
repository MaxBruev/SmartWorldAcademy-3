<template>
    <div class="light-blue darken-1 empty-layout">
        <form class="card auth-card">
            <div class="card-content">
                <span class="card-title">Регистрация</span>
                <div class="input-field">
                    <input id="email" type="text">
                    <label for="email">Email</label>
                    <small class="helper-text invalid">Email</small>
                </div>
                <div class="input-field">
                    <input id="password" type="password" class="validate">
                    <label for="password">Пароль</label>
                    <small class="helper-text invalid">Password</small>
                </div>
                <div class="input-field">
                    <input id="name" type="text" class="validate">
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

