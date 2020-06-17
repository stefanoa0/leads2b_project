<template>
    <div class="row">
      <div class="row">
        <router-link :to="{ name: 'NewEmployee'}" class="waves-effect waves-light btn">New Employee <i class="material-icons rigth">add</i></router-link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Register Number</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="employee in employees" v-bind:key="employee.id">
            <td>{{ employee.name }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.register_number }}</td>
            <td><router-link v-bind:to="'/employee/' + employee.id">Edit</router-link></td>
            <td><a v-on:click="deleteEmployee(employee.id)">Delete</a></td>
          </tr>
        </tbody>
      </table>
    </div>
</template>


<script>
export default {
  name: 'Employees',
  data () {
    return {
      employees: {
        name: '',
        email: '',
        register_number: '',
      }
    }
  },
  created () {
    this.$http.get("/employees")
    .then( (res) => {
        this.$set(this, 'employees', res.data)
    }).catch(err => console.log(err));
  },
  methods: {
    deleteEmployee (id) {
      if(confirm('Delete this item?')){
        this.$http.delete("/employee/" + id)
        .then(() => {
          alert('Deleted with success!');
          this.$router.go();
        }).catch(err => console.log(err));
      }
    }
  }
}
</script>