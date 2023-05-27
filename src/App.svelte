<script>
  import "@picocss/pico";
  import Router from "svelte-spa-router";
  import Logout from "./lib/Logout.svelte";

  import Home from "./routes/Home.svelte";
  import Login from "./routes/Login.svelte";
  import NotFound from "./routes/404.svelte";
  import Register from "./routes/Register.svelte";

  let routes = {
    "/": Home,
    "/login": Login,
    "/register": Register,
    "*": NotFound,
  };
</script>

<svelte:head>
  <title>Todo App</title>
</svelte:head>

<main class="container">
  <nav>
    <ul>
      <li><strong><a href="/#/">Todo App</a></strong></li>
    </ul>
    <ul>
      <li><a href="/#/login">Login</a></li>
      <li><a href="/#/register">Register</a></li>
      <li><Logout /></li>
    </ul>
  </nav>

  <Router {routes} />
</main>
