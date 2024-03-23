<template>
    <div>
      <div class="title"><h1>Import ton composant ici !</h1></div>
    </div>
</template>

<script setup>

import {ref} from "vue";
import Ex1 from "@/views/Ex1.vue";
import ChildComponent from "@/components/ChildComponent.vue";
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