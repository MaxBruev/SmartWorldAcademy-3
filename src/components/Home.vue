<template>
    <div>
        <Header />
        <TodoItem />
        <TodoList />
    </div>
</template>

<script>
    import TodoList from './TodoList'
    import TodoItem from './TodoItem'
    import Header from './Header'
    export default {
        name: 'Home',
        components: {
            Header, TodoList, TodoItem
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    #app {
        height: 100vh;
        position: relative;
    }
    button {
        font-family: Arial, Helvetica, sans-serif;
        color: #929292;
        font-size: 16px;
    }
    input {
        font-family: Arial, Helvetica, sans-serif;
        color: #929292;
    }
</style>