<template>
    <div class="Todo">
        <div>
            <button
                    class="todoList"
                    v-for="list in this.$store.state.lists"
                    v-bind:key="list.listName"
                    v-bind:class="thisActiveList===list.listName ? 'active' : ''"
                    v-on:click="openList(list.listName)"
            >
                {{list.listName}}
                <button class="Delete" v-on:click="DeleteList(list.listName)">×</button>
            </button>
        </div>
        <div class="AddTask">
            <input class="AddTaskListText" v-model="newList.name" type = "text" placeholder="Добавить список..." />
            <button v-on:click="CreateList(newList.name)">+</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TodoList',
        data: () => ({
            newList: {
                name: ''
            },
            thisActiveList: ''
        }),
        async created() {
            await this.$store.dispatch('openTodo');
            this.thisActiveList = this.$store.state.activeList;
        },
        methods: {
            openList(listName) {
                this.$store.dispatch('AllTasks', listName);
                this.thisActiveList = listName;
            },
            CreateList(newListName) {
                this.$store.dispatch('CreateList', newListName);
            },
            async DeleteList(listName) {
                if (confirm(`Удалить список ${listName}?`)) {
                    await this.$store.dispatch('DeleteList', listName);
                    this.thisActiveList = this.$store.state.activeList;
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/index.css";
</style>