<template>
  <div class="reg">
    <h2>Registration</h2>

    <form @submit.prevent="reg">
        <div>
            <input type="text" v-model="username" name="username" id="username" placeholder="Login">
        </div>
        <div>
            <input type="password" v-model="password" name="password" id="password" placeholder="Password">
        </div>
        <p v-text="error"></p>
        <div>
            <button type="submit">Register</button>
        </div>
    </form>
  </div>
</template>


<script>
import { onLogin } from '../vue-apollo'

import LOGIN from "../graphql/login.gql"
import REGISTER from "../graphql/register.gql"

export default { 
  name: 'Reg',
  components: {
  
  },
  data() {
    return {
        username: '',
        password: '',
        error: ''
    }
  },
  methods: {
    reg() {
        this.$apollo.query({
          query: REGISTER,
          variables: {
            username: this.username,
            password: this.password
          },
            
        }).then((data) => {
          console.log(data);
          this.login();
        }).catch((error)=> {
          if(error == "Error: GraphQL error: User with this username already exists.")
          {
            this.error = "User with this username already exists";
          }
        })
        
    },

    login() {
        this.$apollo.query({
          query: LOGIN,
          variables: {
            username: this.username,
            password: this.password
          },
            
        }).then((data) => {
          console.log(data);
          onLogin(this.$apollo.provider.defaultClient, data.data.login);
          this.$router.push('/chats');
        })
        
    },

  },
}
</script>

