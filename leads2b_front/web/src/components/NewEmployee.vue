<template>
  <div class="row">
    <div class="col s12 m12 l12">
      <div class="card white darken-1">
        <div class="card-content black-text">
          <span class="card-title">Employee</span>
          <div class="row">
            <form class="col s12" v-on:submit.prevent="onSubmit">
              <div class="row">
                <input  id="id" type="hidden" class="validate" v-model="id">
                <div class="input-field col s6">
                  <input  id="name" type="text" class="validate" v-model="name">
                  <label for="name">Name</label>
                </div>
                <div class="input-field col s6">
                  <input  id="email" type="text" class="validate" v-model="email">
                  <label for="email">Email</label>
                </div>
                <div class="input-field col s6">
                  <input id="register_number" type="number" class="validate" v-model="register_number">
                  <label for="register_number">Register Number</label>
                </div>
              </div>
                <div class="card-action">
                  <button class="btn waves-effect waves-light" type="submit" name="action">Save
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
//import employee_service from '../services/employee.service';

export default {
  name: 'NewEmployee',
  data () {
    return {
      id: "",
      name: "",
      email: "",
      register_number: "",
    }
  },
  created () {
    if (this.$route.params.id) {
      this.$http.get('/employee/' + this.$route.params.id)
        .then((employee) => {
          const employee_data = employee.data
          this.id = employee_data.id,
          this.name = employee_data.name,
          this.email = employee_data.email,
          this.register_number = employee_data.register_number
        }
      )
    }
  },
  methods: {
    onSubmit () {
      if (!this.validateForm()) {
        alert('All fields should be filled');
        return false;
      }
      if (!this.id){
        this.createEmployee();
      } else {
        this.updateEmployee();
      }
    },
    buildEmployeeObject () {
      return {
          name: this.name, 
          email: this.email, 
          register_number: this.register_number
        }
    },
    validateForm () {
      return !!this.name &&
         !!this.email &&
         !!this.register_number
    },
    createEmployee () {
      this.$http.post('/employees', this.buildEmployeeObject())
      .then(
        (() => {
          alert('Employee added successfully');
          this.$router.push({ name: 'Employees' });
        }
      ).bind(this))
       .catch((err) => {
        console.log(err);
      });
    },
    updateEmployee () {
      this.$http.put('/employee/' + this.id, this.buildEmployeeObject())
      .then(
        (() => {
          alert('Employee updated successfully');
          this.$router.push({ name: 'Employees' });
        }
      ).bind(this))
       .catch((err) => {
        console.log(err);
      });
    }
  }
}
</script>