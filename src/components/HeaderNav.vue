<template>
  <div>
    <header class="page-header d-flex py-3">
      <div class="container-fluid d-flex mx-0 justify-content-between">
        <div class="container ml-1 pl-1 d-flex">
          <img id="logo" src="../assets/logo.jpg" class="rounded col-2 float-left" alt="Logo" />

          <h1 class="align-self-center text-left">
            TGIF
          </h1>
        </div>
        <a
          href="mailto:info@tgif.net"
          class="pull-right align-self-center d-flex mr-1 pr-1 text-dark"
          ><i class="fas fa-at fa-3x"></i
          ><span class="align-self-center pl-1">info@tgif.net</span></a
        >
      </div>
    </header>

    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            ><router-link to="/" class="text-light" id="homelink">Home</router-link></b-nav-item
          >
          <b-nav-item-dropdown
            toggle-class="text-light"
            text="Congress 113"
            type="dark"
            variant="info"
            active
            left
          >
            <b-dropdown-item><router-link to="/senate">Senate</router-link></b-dropdown-item>
            <b-dropdown-item
              ><router-link to="/house">House of Representatives </router-link></b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item-dropdown
            toggle-class="text-light"
            text="Attendance"
            type="dark"
            variant="info"
            active
            left
          >
            <b-dropdown-item
              ><router-link to="/senateattendance">Senate</router-link></b-dropdown-item
            >
            <b-dropdown-item
              ><router-link to="/houseattendance"
                >House of Representatives
              </router-link></b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item-dropdown
            toggle-class="text-light"
            text="Party Lotalty"
            type="dark"
            variant="info"
            active
            left
          >
            <b-dropdown-item><router-link to="/senateloyalty">Senate</router-link></b-dropdown-item>
            <b-dropdown-item
              ><router-link to="/houseloyalty"
                >House of Representatives
              </router-link></b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script></script>

<style scoped>
.navbar,
.navbar a,
#homelink {
  font-size: 21px;
  font-weight: bold;
}

.navbar a {
  font-size: 18px;
  font-weight: 400;
  color: #343a40;
}

header a {
  font-size: 21px;
  font-weight: bold;
}
</style>
