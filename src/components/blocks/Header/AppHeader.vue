<template>
  <div class="app-header">
    <!--Navbar-->
    <nav class="navbar navbar-dark info-color fixed-top scrolling-navbar">
        <!-- Navbar brand -->
        <router-link to="/" class="navbar-brand">
          <img :src="logo">
        </router-link>
        <ul class="navbar-nav ml-auto navbar-icons">
          <li class="nav-item">
            <a class="nav-link">
              <md-icon>account_circle</md-icon>
            </a>
            <a href="#shoppingCartModal" class="nav-link" data-toggle="modal" data-target="#shoppingCartModal">
              <span v-show="inCart.length > 0" class="cart-counter">{{ inCart.length }}</span>
              <md-icon>shopping_cart</md-icon>
            </a>
          </li>
        </ul>
        <!-- Collapse button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Collapsible content -->
        <div class="collapse navbar-collapse" id="basicExampleNav">
            <!-- Links -->
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Women
                      <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Men</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Children</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sale</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Your order</a>
                </li>
            </ul>
            <!-- Links -->
        </div>
        <!-- Collapsible content -->
    </nav>
    <!--/.Navbar-->
  </div>
</template>

<script>

export default {
  name: 'app-header',

  data () {
    return {
      logo: '../assets/logo.svg'
    }
  },
  computed: {
    inCart() { return this.$store.getters.inCart; }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/scss/styles.scss";

.app-header {
  border-bottom: 1px solid $grey;
}
.navbar {
  &.navbar-dark {
    .navbar-nav {
      .nav-item {
        .nav-link {
          padding: 10px;
          position: relative;
        }
      }
    }
  }
  .navbar-brand {
    width: 30px;
  }
}
.navbar-icons {
  li {
    display: inherit;
  }
}
.info-color {
  background-color: $main-blue !important;
}
.cart-counter {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: $orange-accent;
  text-align: center;
  font-weight: bold;
  font-size: 0.8em;
  color: #fff;
  position: absolute;
  top: 0;
  right: -0.2em;
}
</style>