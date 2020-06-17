<template>
  <div class="row">
    <div class="col s12 m12 l12">
      <div class="card white darken-1">
        <div class="card-content black-text">
            <span class="card-title">SignIn</span>
            <div class="row">
              <form class="col s12" v-on:submit.prevent="onSubmit">
                <div class="row">
                  <div class="input-field col s6">
                      <input  id="email" type="text" class="validate" name="email" v-model="user.email">
                      <label for="email">Email</label>
                  </div>
                  <div class="input-field col s6">
                      <input id="password" type="password" class="validate" name="password" v-model="user.password">
                      <label for="password">Password</label>
                  </div>
                </div>
                <div class="card-action">
                  <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                      <i class="material-icons right">send</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
//import user_service from '../services/user.service';

export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: "",
        password: "",
        token: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$http.post('/signin', this.user)
          .then(res => {
            this.user = res.data;
            sessionStorage.setItem('user-token', this.user.token);
            this.$store.commit('setUser', this.user);
            this.$router.push({name: 'Employees', force: true})
          })
    }
  }
}
</script>
