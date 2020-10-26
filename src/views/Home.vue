<template>
  <b-container>
    <h1>To Do List with Firebase</h1>

    <b-row class="justify-content-center">
      <b-col cols="8">
        <b-form inline class="justify-content-center">
          <!-- v-model = untuk menampung value -->
          <b-input
            type="text"
            v-model="todo"
            v-on:keypress.enter.prevent="addTodo"
            placeholder="To do..."
          ></b-input>
          <b-button class="ml-3" variant="success" v-on:click="addTodo()">Add</b-button>
        </b-form>
      </b-col>
    </b-row>

    <!-- List -->
    <b-row class="justify-content-center mt-5">
      <b-col cols="8">
        <table class="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Todo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="todos.length > 0">
            <tr v-for="(item, key) in todos" v-bind:key="item.id">
              <td>{{key + 1}}</td>
              <td>
                <div>{{item.name}}</div>
                <!-- <div v-if="show !== key">{{item}}</div> -->
                <!-- <b-input v-if="show === key" type="text" v-model="update" @keypress.enter="save(key)" placeholder="update..."></b-input> -->
              </td>
              <td>
                <b-button class="mr-3" variant="danger" v-on:click="deleteTodo(item.id)">delete</b-button>
                <!-- <b-button v-if="show !== key" variant="outline-primary" @click="up(item, key)">update</b-button>
                <b-button v-if="show === key" variant="primary" @click="save(key)">save</b-button> -->
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td>None</td>
              <td>None</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {db} from "../firebase/db"

export default {
  name: "Local",
  data() {
    return {
      todo: "",
      todos: []
    };
  },
  methods: {
    async addTodo() {
      await db.collection("todos").add({name: this.todo})
      this.todo = "";
    },
    deleteTodo(id) {
      db.collection("todos").doc(id).delete();
    }
  },
  firestore: {
    todos: db.collection("todos")
  }
};
</script>