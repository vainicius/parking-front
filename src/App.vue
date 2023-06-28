<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">ParkingApp</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-flex justify-content-between"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/marcas">Marcas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cadastrar"
              >Cadastros</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/modelos">Modelos</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/">Configurações</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link" to="/condutor">Condutor</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/veiculos">Veiculo</router-link>
          </li>
        </ul>
        <router-link
          type="button"
          to="/"
          class="btn btn-primary btn-sm bg-success border border-success"
          >Nova movimentação
        </router-link>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a0a0a;
}

body {
  background-color: #ffffff;
}
</style>
