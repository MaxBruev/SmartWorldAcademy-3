
<template>
    <div class="todo">
        <div>
            <button class="todoList" :data = "data" v-for="(data, index) in list" :key="index">
                {{data.name}}
                <button class="close">×</button>
            </button>
        </div>
        <div class="addCont">
            <input class="text_addCont" type = "text" placeholder="Добавить список..." v-model="new_list.name"/>
            <button @click="add_task()">+</button>
        </div>
    </div>
</template>

<script>
    export default  {
        props: ['data'],
        data: () => ({
            list: [
                {
                    name:''
                }
            ],
            new_list: [
                {
                    name: ''
                }
            ]
        }),
        components: {

        },
        methods:{
            task_done() {
                this.$emit('task_done');
            },
            delete_task(id) {
                this.list.splice(id,1);
            },
            add_task() {
                if(this.new_list.name !== ' ') {
                    this.list.push({
                        name: this.new_list.name
                    });
                }
                this.new_list.name = ' ';
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/index.css";
</style>