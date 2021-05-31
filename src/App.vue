<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">Login</router-link> 
      <router-link to="/reg">Registration</router-link> 
      <router-link to="/chats">Chats</router-link>
    </div>
    <div id="page">
    <router-view/>
    </div>
  </div>
</template>


<style>
body {
  font: 18px "Lucida Grande", Helvetica, Arial, sans-serif;
  background-color: #dbe7ce;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#page {
  padding: 10px;
  padding-left: 30px;
}

#page h2 {
  color: #445c2b;
}

#page input {
  padding: 10px;
  font-size: 18px;
  border: 1px solid grey;
  background: #f1f1f1;
  height: 20px;
  border-radius: 3px;
}

.home a {
  text-decoration: none;
  color: #57723c;
  font-weight: bold;
}

.home a:hover {
  color: #394d23;
}

button {
  background: #789c53;
  border: 1px solid #6b8b4a;
  font-size: 18px;
  width: 110px;
  height: 42px;
  border-radius: 3px;
  font-weight: bold;
  color: white;
}

button:hover {
  background: #6a884c;
}

.box1 input {
  margin-right: 5px;
  width: 300px;
}

.reg input, .login input {
  margin-bottom: 10px;
  width: 300px;
}

.box3 input {
  margin-right: 5px;
  width: 708px;
}

#nav {
  overflow: hidden;
  background: #4b6333;
}

#nav a {
  float: left;
  color: #d9ecc6;
  text-align: center;
  padding: 18px 20px;
  text-decoration: none;
}

#nav a:hover {
  background: #61813f;
  color: black;
}

#nav a.router-link-exact-active {
  background:#729451;
  color: #e8f0df;
}

.grid {
  display: grid;
  grid-template-areas: 
    "chats chat"
    "sss chat";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  margin: 20px 0px;
}

.grid2 {
  display: grid;
  grid-template-areas: 
    "mes"
    "mes_field"
    "users";
  grid-template-rows: 450px 50px 300px;
  grid-gap: 5px;
}


.box1 {
  grid-area: chats;
  overflow: hidden;
  max-width: 550px;
  padding: 10px 20px;
  border-radius: 5px;
  background: #bcd8a1;
}


.box2 {
  grid-area: mes;
  padding: 10px 20px;
  background: #c8dfb3;
  border-radius: 5px;
  border: 2px solid #8baf67;
  overflow-y: scroll;
}

.mes_list {
  background: #a6c789;
  border-radius: 3px;
  padding: 12px;
  width: 800px;
}

.box2 button {
  margin-top: 10px;
}

.box3 {
  grid-area: mes_field;
}

.box4 {
  margin-top: 40px;
  grid-area: users;
  padding: 10px 20px;
  background: #c8dfb3;
  border-radius: 5px;
  border: 2px solid #8baf67;
  overflow-y: scroll;
}

.list {
  background: #91b66c;
  border: 1px solid #8baf67;
  width: 325px;
  height: 45px;
  border-radius: 3px;
  font-weight: inherit;
  color: #313d24;
  overflow: hidden;
}

.upd_del {
  margin-left: 5px;
  width: 50px;
  height: 45px;
}

.author {
  padding-right: 20px;
  font-weight: bold;
}

.time {
  font-size: 12px;
}

.join_but {
  padding-bottom: 10px;
}

.error {
  padding-left: 20px;
}

.my_room {
  background: #96a758;
}

.my_mes {
  background: #b4c576;
}

.notif {
  background: #b3d196;
  border-radius: 5px;
  padding: 12px;
  width: 800px;
}

</style>

