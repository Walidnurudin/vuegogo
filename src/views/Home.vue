<template>
  <b-container>
    <h1>To Do List</h1>

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
            <tr v-for="(item, key) in todos" v-bind:key="key">
              <td>{{key + 1}}</td>
              <td>{{item}}</td>
              <td>
                <b-button variant="danger" v-on:click="deleteTodo(key)">delete</b-button>
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
export default {
  name: "Home",
  data() {
    return {
      todo: "",
      todos: []
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.todo);
      this.todo = "";
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>