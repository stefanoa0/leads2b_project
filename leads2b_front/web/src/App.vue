<template>
  <div id="app" >
    <nav>
      <div class="nav-wrapper light-blue lighten-5">
        <div class="row">
          <div class="col s6 m3 l2">
            <img src="@/assets/logo.png" class="responsive-img" />
          </div>
          <ul class="right" id="nav-mobile" v-if="!user.token">
            <li><router-link :to="{ name: 'Signup'}" class="grey-text text-darken-1">SignUp</router-link></li>
            <li><router-link :to="{ name: 'Signin'}" class="grey-text text-darken-1">Login</router-link></li>
          </ul>
          <div v-if="user.token">
              <ul class="right" id="nav-mobile">
                <li><router-link :to="{ name: 'Employees'}" class="grey-text text-darken-1"> Employees </router-link></li>
                <li><a v-on:click="logout" class="grey-text text-darken-1">LogOut</a></li>
              </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      user: {
        name: '',
        email: '',
        token: ''
      }
    }
  },
  created () {
    this.user = this.$store.getters.getUser
  },
  methods: {
    logout () {
      sessionStorage.removeItem('user-token');
      this.$router.go('/');
    }
  }
}
</script>
