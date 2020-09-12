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
              <td>
                <div v-if="show !== key">{{item}}</div>
                <b-input v-if="show === key" type="text" v-model="update" @keypress.enter="save(key)" placeholder="update..."></b-input>
              </td>
              <td>
                <b-button class="mr-3" variant="danger" v-on:click="deleteTodo(key)">delete</b-button>
                <b-button v-if="show !== key" variant="outline-primary" @click="up(item, key)">update</b-button>
                <b-button v-if="show === key" variant="primary" @click="save(key)">save</b-button>
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
  name: "Local",
  data() {
    return {
      todo: "",
      todos: [],
      show: false,
      update: ""
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.todo);
      this.todo = "";
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    up(i, key) {
      this.show = key;
      this.update = i;
    },
    save(id) {
      this.show = true;
      this.todos.splice(id, 1, this.update);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>