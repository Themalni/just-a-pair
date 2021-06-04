<template>
  <div class="modal fade" id="userLoginModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header text-center">
          <ul class="nav nav-tabs" id="loginTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active mr-1"
                id="login-tab"
                data-toggle="tab"
                href="#login"
                role="tab"
                aria-controls="login"
                aria-selected="true"
              >Login</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link ml-1"
                id="register-tab"
                data-toggle="tab"
                href="#register"
                role="tab"
                aria-controls="register"
                aria-selected="false"
              >Register</a>
            </li>
          </ul>
        </div>
        <div class="modal-body mx-3">
          <div class="tab-content" id="myTabContent">
            <!-- Login -->
            <div
              class="tab-pane fade show active"
              id="login"
              role="tabpanel"
              aria-labelledby="login-tab"
            >
              <div class="md-form mb-2 mt-3">
                <md-icon class="prefix grey-text">email</md-icon>
                <input
                  type="email"
                  id="login-email"
                  v-model="email"
                  class="form-control validate mb-2"
                />
                <label data-error="wrong" data-success="right" for="login-email">Your email</label>
              </div>
              <div class="md-form mb-2">
                <md-icon class="prefix grey-text">lock</md-icon>
                <input
                  type="password"
                  id="login-pass"
                  v-model="password"
                  class="form-control validate mb-2"
                  @keyup.enter="login"
                />
                <label data-error="wrong" data-success="right" for="login-pass">Your password</label>
              </div>
              <button class="btn btn-primary btn-block mb-2 mt-4" @click="login">Login</button>
            </div>
            <!-- Register -->
            <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
              <div class="md-form pb-2 mt-2">
                <md-icon class="prefix grey-text">account_circle</md-icon>
                <input
                  type="text"
                  id="register-name"
                  v-model="name"
                  class="form-control validate mb-2"
                />
                <label data-error="wrong" data-success="right" for="register-name">Your name</label>
              </div>
              <div class="md-form pb-2 mt-2">
                <md-icon class="prefix grey-text">email</md-icon>
                <input
                  type="email"
                  id="register-email"
                  v-model="email"
                  class="form-control validate mb-2 mt-4"
                />
                <label data-error="wrong" data-success="right" for="register-email">Your email</label>
              </div>
              <div class="md-form pb-2 mt-2">
                <md-icon class="prefix grey-text">lock</md-icon>
                <input
                  type="password"
                  id="register-pass"
                  v-model="password"
                  class="form-control validate mb-2"
                />
                <label data-error="wrong" data-success="right" for="register-pass">Your password</label>
              </div>
              <button class="btn btn-default btn-block mb-2 mt-4" @click="registerUser">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "@/firebase";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      name: null,
      email: null,
      password: null,
      userData: null
    };
  },
  computed: {
    ...mapGetters(["user"]),
    nextRoute() {
      return this.$route.query.redirect || "/";
    }
  },
  methods: {
    ...mapMutations(["updateUser"]),
    registerUser() {
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          db.collection("profiles")
            .doc(user.user.uid)
            .set({
              name: this.name
            });
          $("#userLoginModal").modal("hide");
          this.$router.replace("admin-dashboard");
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
    login() {
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          $("#userLoginModal").modal("hide");
          this.$router.push("/admin-dashboard");
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    }
  },
  watch: {
    user(auth) {
      if (!!auth) {
        this.$router.replace(this.nextRoute);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.md-form {
  .prefix {
    top: 0.4rem;
  }
}
.modal-header {
  border-bottom: 0;
  background-color: $main-blue;
}
.modal-footer {
  border-top: 0;
}
.nav-tabs {
  width: 100%;
  border-bottom: 0;

  .nav-link {
    text-transform: uppercase;
    color: #fff;

    &:hover {
      text-decoration: none;
    }

    &:not(.active):hover {
      border-color: transparent;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  .nav-item {
    flex: 1 !important;
  }
}
</style>
