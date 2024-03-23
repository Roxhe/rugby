<template>
  <div>
    <div class="title"><h1>Les boucles</h1></div>
    <div class="ex">
      <form @submit.prevent="addTodo">
        <input v-model="newTodo">
        <button>Ajouter une tâche</button>
      </form>
      <ul>
        <li v-for="todo in todos">
          {{ todo.text }}
          <button @click="removeTodo(todo)">X</button>
        </li>

      </ul>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
let id = 0

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Apprendre le HTML' },
  { id: id++, text: 'Apprendre le JavaScript' },
  { id: id++, text: 'Apprendre Vue' }
])

function addTodo() {
  todos.value.push(
      {id: id++, text: newTodo.value}
  )
}

function removeTodo(todo) {
  todos.value = todos.value.filter(t => t !== todo)
}

</script>

<style scoped>
.jour{
  background-color: #f2f2f2;
  color: crimson;
  padding: 10px;
  margin: 10px;
}

.nuit{
  background-color: #181818;
  color: darkcyan;
  padding: 10px;
  margin: 10px;
}
</style>