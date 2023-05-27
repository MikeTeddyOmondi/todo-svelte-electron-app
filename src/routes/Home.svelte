<script>
  import Todo from "../lib/Todo.svelte";

  let todo = "";
  let TODOS = [];
  const API_URL = "http://localhost:5000";

  const addTodo = async () => {
    let formData = { title: todo, completed: false };
    const response = await fetch(`${API_URL}/todos`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    todo = "";
  };

  const getTodos = async () => {
    const response = await fetch(`${API_URL}/todos`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    TODOS.push(data);
    console.log("TODOS: ", TODOS);
  };

  $: getTodos();
</script>

<main class="container">
  <form on:submit|preventDefault={addTodo}>
    <label for="todo">Todo</label>
    <input type="text" placeholder="Add Todo" name="todo" bind:value={todo} />
    <input type="submit" value="Add" class="btn btn-primary" />
  </form>

  {#each TODOS as todo, i (todo.id)}
    <Todo {todo} />
  {:else}
    <article>No todos available!</article>
  {/each}
</main>
