<script>
  import { push } from "svelte-spa-router";

  const clearSession = async () => {
    push("#/login");
  };
</script>

<button on:click={clearSession}> Logout </button>
