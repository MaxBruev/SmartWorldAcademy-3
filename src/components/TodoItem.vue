<template>
    <div>
        <div class="todoListItem">
            <div class="todoItem"  :data = "data" v-for="(data, index) in tasks" @task_done="delete_task(index)">
                <div class="cont">
                    <input class="ps_checkbox" type="checkbox" v-model="data.done" />
                    {{data.name}}
                </div>
                <div class="data" >
                    {{new Date().getDate()+'.'+ (new Date().getMonth()+1)+'.'+ new Date().getFullYear()+' '+new Date().getHours()+':'+new Date().getMinutes()}}
                    <button class="close" v-if="data.done" @click="task_done()">X</button>
                </div>
            </div>
        </div>
        <div class="container__addTask">
            <div class="addCont">
                <label>
                    <input class="text_addCont" type="text" placeholder="Добавить задачу..." v-model="new_task.name" />
                </label>
                <button @click="add_task()">+</button>
            </div>
            <div>
                <input class="ps_checkbox" type="checkbox" id="quick" />
                <label for="quick">Срочное</label>
            </div>
        </div>
    </div>
</template>

<script>
 export default  {
     props: ['data'],
     data: () => ({
         tasks: [
             {
                 name:'123'
             }
         ],
         new_task: [
             {
                 name: ''
             }
         ]
     }),
     methods:{
         add_task() {
             if(this.new_task.name !== ' ') {
                 this.tasks.push({
                     name: this.new_task.name
                 });
             }
             this.new_task.name = ' ';
         },
         task_done() {
             this.$emit('delete_task');
         },
         delete_task(id){
             this.tasks.slice(id, 1);
         }
     }
 }
</script>

<style lang="scss">
    @import "../assets/index.css";
</style>