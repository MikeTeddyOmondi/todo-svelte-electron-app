<script>
  import Todo from "../lib/Todo.svelte";
  // import {todoStore} from "../stores/todoStore.js";

  let todos = [];
  let message = "";
  let todoValue = "";
  const API_URL = "http://localhost:5000";

  const getTodos = async () => {
    const response = await fetch(`${API_URL}/todos`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    todos.push(...data);
    todos = todos;
    return data;
  };

  const addTodo = async () => {
    if (todoValue === "") {
      message = "Please enter a todo!";
      return;
    }
    let formData = { title: todoValue, completed: false };
    const response = await fetch(`${API_URL}/todos`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    todos.push(data);
    todos = todos;
    todoValue = "";
    return;
  };

  $: getTodos();
  $: todos;
</script>

<main class="container">
  <center><span><b>{message || ""}</b></span></center>
  <form on:submit|preventDefault={addTodo}>
    <label for="todo">Todo</label>
    <input
      type="text"
      placeholder="Add Todo"
      name="todo"
      bind:value={todoValue}
      on:focus={() => (message = "")}
    />
    <input type="submit" value="Add" class="btn btn-primary" />
  </form>

  {#each todos as todo}
    <Todo {todo} />
  {:else}
    <article>No todos available!</article>
  {/each}
</main>

<style>
  span {
    color: red;
  }
</style>
