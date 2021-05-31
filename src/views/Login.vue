<template>
  <div class="login">
    <h2>Login</h2>

    <form @submit.prevent="login">
        <div>
            <input type="text" v-model="username" name="username" id="username" placeholder="Login">
        </div>
        <div>
            <input type="password" v-model="password" name="password" id="password" placeholder="Password">
        </div>
        <p v-text="error"></p>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
  </div>
</template>


<script>
import { onLogin } from '../vue-apollo'

import USERNAME_EXISTS from "../graphql/usernameExists.gql"
import LOGIN from "../graphql/login.gql"

export default { 
  name: 'Login',
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

    login() {

      this.$apollo.query({
          query: USERNAME_EXISTS,
          variables: {
            username: this.username,
          },
            
        }).then((data) => {
          if(!data.data.usernameExists)
          {
            this.error = "No such user exists";
            return;
          }
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
          }).catch((error)=> {
            if(error == "Error: GraphQL error: Invalid credentials.")
            {
              this.error = "Incorrect password";
            }
          })
        })
      
      
    },

  },
}
</script>

