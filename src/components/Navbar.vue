<template>
  <div class="app-header">
    <!--Navbar-->
    <nav class="navbar navbar-dark info-color fixed-top scrolling-navbar">
      <!-- Navbar brand -->
      <router-link to="/" class="navbar-brand">
        <img :src="logo" />
      </router-link>
      <ul class="navbar-nav ml-auto navbar-icons">
        <li class="nav-item">
          <user-popover>
            <template slot="activator">
              <a class="nav-link font-weight-bolder text-large">
                User
                <md-icon>account_circle</md-icon>
              </a>
            </template>
            <template slot="content">
              <div class="popover-content">
                <span class="popover-arrow"></span>
                <a
                  v-if="!user"
                  class="popover-item popover-link font-weight-bolder"
                  href="#userLoginModal"
                  data-toggle="modal"
                  data-target="#userLoginModal"
                  @click="openRegisterTab"
                >
                  <span class="popover-text">Register</span>
                </a>
                <a
                  v-if="!user"
                  class="popover-item popover-link font-weight-bolder"
                  href="#userLoginModal"
                  data-toggle="modal"
                  data-target="#userLoginModal"
                  @click="openLoginTab"
                >
                  <span class="popover-text">Login</span>
                </a>
                <router-link
                  v-if="!!user"
                  class="popover-item popover-link font-weight-bolder"
                  to="/user-dashboard"
                >User profile</router-link>
                <div v-if="!!user" class="popover-item popover-link">
                  <button class="button-reset font-weight-bolder" @click="logout">Logout</button>
                </div>
              </div>
            </template>
          </user-popover>
        </li>
        <li class="nav-item">
          <a
            href="#shoppingCartModal"
            class="nav-link font-weight-bolder text-large"
            data-toggle="modal"
            data-target="#shoppingCartModal"
          >
            <span v-show="inCart.length > 0" class="cart-counter">{{ inCart.length }}</span>
            <span class="mr-1">Cart</span>
            <md-icon>shopping_cart</md-icon>
          </a>
        </li>
      </ul>
      <!-- Collapse button -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#basicExampleNav"
        aria-controls="basicExampleNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
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
            <a class="nav-link" href="#">
              Women
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
    <login />
  </div>
</template>

<script>
import Login from "@/components/user/Login";
import Popover from "@/components/Popover";
import { fb } from "@/firebase";
import { mapState } from "vuex";
import { CLEAR_USER } from "@/store/types";
import store from '@/store';

export default {
  name: "Navbar",
  components: {
    Login,
    "user-popover": Popover
  },
  data() {
    return {
      logo: "../assets/logo.svg"
    };
  },
  computed: {
    ...mapState(["user", "inCart"])
  },
  methods: {
    openRegisterTab() {
      $('#loginTab a[href="#register"]').tab("show");
    },
    openLoginTab() {
      $('#loginTab a[href="#login"]').tab("show");
    },
    logout() {
      fb.auth().signOut()
        .then(() => {
          store.dispatch(CLEAR_USER);

          this.$notify({
            text: 'You logout successfully',
            type: 'success',
            duration: 3000
          })
        })
        .catch(() => {
          this.$notify({
            text: 'Logout error',
            type: 'error',
            duration: 3000
          })
        });

      if(this.$route.name !== "Home") {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
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

          &:active {
            color: $dark-grey;
          }

          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
  .navbar-brand {
    width: 30px;
  }
}
.navbar-nav {
  &.navbar-icons {
    flex-direction: row;
    flex-wrap: nowrap;

    .nav-item {
      display: inherit;
    }
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