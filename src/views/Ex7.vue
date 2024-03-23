<template>
    <div>
      <div class="title"><h1>Les observateurs et les proprietés calculés</h1></div>
      <div><h3> Compteur de Todo : </h3></div>
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
import Ex1 from "@/views/Ex1.vue";
let id = 0

const newTodo = ref('')
const todos = ref([])

function addTodo() {
  todos.value.push(
      {id: id++, text: newTodo.value}
  )
}

function removeTodo(todo) {
  todos.value = todos.value.filter(t => t !== todo)
}
</script>

<style>

</style>