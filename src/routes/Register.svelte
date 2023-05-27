<script>
  let email = "";
  let username = "";
  let password = "";

  const API_URL = "http://localhost:5000";

  const handleRegister = async () => {
    let formData = { email, username, password };

    // fetch users
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log({ data });
  };
</script>

<main class="container">
  <h1>Register</h1>
  <form on:submit|preventDefault={handleRegister}>
    <label for="username">Username</label>
    <input
      type="text"
      placeholder="Enter username"
      name="username"
      bind:value={username}
    />
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
