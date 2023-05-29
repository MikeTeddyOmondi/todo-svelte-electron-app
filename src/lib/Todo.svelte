<script>
  import "boxicons";
  export let todo;

  /**
   * Id property of one todo
   * @param {number} id
   */
  const updateTodo = (id) => {
    console.log(id);
  };

  /**
   * Id property of one todo
   * @param {number} id
   */
  const deleteTodo = (id) => {
    console.log(id);
  };
</script>

<article>
  <div class="todo-card">
    <div class="todo-card-info">
      {#if todo.completed}
        <p>
          <s>{todo.title}</s>
        </p>
      {:else}
        <p>{todo.title}</p>
      {/if}
    </div>
    <div class="todo-card-icons">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <box-icon
        color="red"
        type="solid"
        name="trash-alt"
        class="box-icon"
        on:click={deleteTodo(todo.id)}
      />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <box-icon
        color={todo.completed ? "green" : "gray"}
        type="solid"
        name="check-circle"
        class="box-icon"
        on:click={updateTodo(todo.id)}
      />
    </div>
  </div>
</article>

<style>
  .todo-card {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .todo-card-info {
    width: 100%;
  }
  .todo-card-icons {
    width: 100%;
  }
  .box-icon {
    float: right;
    margin: 0 4px 0 4px;
  }
  .box-icon:hover {
    cursor: pointer;
  }
</style>
