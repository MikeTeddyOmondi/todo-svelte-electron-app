<script>
  let email = "";
  let password = "";

  const API_URL = "http://localhost:5000"

  const handleLogin = async () => {    
    // fetch users
    const response = await fetch(`${API_URL}/users`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log({data})
  };
</script>

<main class="container">
  <h1>Login</h1>
  <form on:submit|preventDefault={handleLogin}>
    <label for="email">Email</label>
    <input
      type="email"
      placeholder="Enter email"
      name="email"
      bind:value={email}
    />
    <label for="password">Password</label>
    <input
      type="password"
      placeholder="Enter password"
      name="password"
      bind:value={password}
    />
    <input type="submit" value="Login" class="btn btn-primary" />
  </form>
</main>
