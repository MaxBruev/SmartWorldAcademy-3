<template>
    <div>
        <div class="todoTask">
            <div class="Tasks" v-for="task in this.$store.state.tasks" v-bind:key="task.id">
                <div>
                    <input class="quick" type="checkbox" v-bind:id="task.id" v-bind="{checked: task.done}" v-on:click="makeDone(task.taskName)" />
                    <label v-bind:for="task.id"></label>
                    <div class="Import" v-if="task.important"></div>
                    <div class="Task_p" v-bind:class="{done: task.done}">{{task.taskName}}</div>
                </div>
                <div class="TodoDelete">
                    {{task.dataCreated}}
                    <button class="Delete" v-on:click="DeleteTask(task.taskName)">×</button>
                </div>
            </div>
        </div>
        <div class="TodoAddTask">
            <div class="AddTask">
                <input class="AddTaskListText" v-model="newTask.name" type="text" placeholder="Добавить задачу..." />
                <button v-on:click="CreateTask(newTask.name, newTask.important)">+</button>
            </div>
            <div class="ps_newTask">
                <input class="quick" v-model="newTask.important" type="checkbox" id="quick">
                <label for="quick">Срочное</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TodoItem',
        data: () => ({
            newTask: {
                name: '',
                important: ''
            }
        }),
        methods: {
            CreateTask(newTaskName, important) {
                let CreateDataTime = new Date().getDate()+'.'+ (new Date().getMonth()+1)+'.'+ new Date().getFullYear()+' '+new Date().getHours()+':'+new Date().getMinutes();
                let payload = {
                    newTaskName,
                    important,
                    CreateDataTime
                };
                this.$store.dispatch('CreateTask', payload);
            },
            makeDone(taskDoneName) {
                this.$store.dispatch('makeDone', taskDoneName);
            },
            DeleteTask(taskName) {
                if (confirm(`Удалить задачу ${taskName}?`)) {
                    this.$store.dispatch('DeleteTask', taskName);
                }
            },
        }
    }
</script>
<style lang="scss">
    @import "../assets/index.css";
</style>