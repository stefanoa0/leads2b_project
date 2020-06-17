<template>
  <div class="row">
    <div class="col s12 m12 l12">
      <div class="card white darken-1">
        <div class="card-content black-text">
          <span class="card-title">SignUp</span>
          <div class="row">
            <form class="col s12" v-on:submit.prevent="onSubmit">
              <div class="row">
                <div class="input-field col s6">
                  <input  id="name" type="text" class="validate" v-model="name">
                  <label for="name">Name</label>
                </div>
                <div class="input-field col s6">
                  <input  id="email" type="text" class="validate" v-model="email">
                  <label for="email">Email</label>
                </div>
                <div class="input-field col s6">
                  <input id="password" type="password" class="validate" v-model="password">
                  <label for="password">Password</label>
                </div>
                <div class="input-field col s6">
                  <input id="re_password" type="password" class="validate" v-model="password">
                  <label for="re_password">Re-type Password</label>
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
  name: 'Signup',
  data () {
    return {
      name: "",
      email: "",
      password: "",
      re_password: ""
    }
  },
  methods: {
    onSubmit () {
      this.$http.post('/signup', this.buildUserObject())
          .then( () => {
            this.$router.push({name: 'Signin', force: true})
          })
    },
    buildUserObject () {
      return {
          name: this.name, 
          email: this.email, 
          password: this.password
        }
    },
  }
}
</script>
