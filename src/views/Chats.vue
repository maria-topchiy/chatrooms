<template>
  <div class="chats">

    <div class="grid">
      <div class="box1">
        <h2>Chats</h2>
        <p v-text="auth_err"></p>
        <div v-show="auth">
        <h4>Create new chat</h4>
  
        <form @submit.prevent="createRoom">
          <input placeholder="Name" name="name" id="name" v-model="name">
          <button type="submit">Create</button>
        </form>
        <p v-text="error2"></p>

        <h3>Chat list</h3>
        <p v-text="notif"></p>
        <p v-for="(room, index) in rooms" v-bind:key="room.id">
          <button class="list" v-bind:class="{ my_room: curr_room(room) }" @click="show_chat(room)">{{room.name}}</button>
          <span v-show="my_chats(room)">
          <button class="upd_del" @click="updateRoom(room.id)">Upd</button>
          <button class="upd_del" @click="deleteRoom(room.id, index)">Del</button>
          </span>
        </p>
        </div>
      </div>

      

      <div v-show="show">
      
      <div class="join_but">
      <div v-if="joined">
        <button @click="leaveCurrentRoom">Leave</button>
      </div>
      <div v-else>
        <button @click="joinRoom">Join</button>
        <span class="error" v-text="error"></span>
      </div>
      </div>
      

      <div class="grid2">
      <div class="box2">


        <div v-if="joined">
          <table id="table">
          <tr v-for="message in room.lastMessages" v-bind:key="message.id">
            <td class="mes_list" v-bind:class="{ my_mes: my_mes(message) }">
              
              <span class="author">{{message.author.username}}</span>
              <span class="time">{{message.timestamp.substring(11, 16)}}</span>
              <div>{{message.text}}</div>
            </td>
          </tr>
          </table>
        </div>
      </div>

      <div class="box3">
        <div v-if="joined">
        <form @submit.prevent="createMessage">
          <input class="mes_field" autocomplete="off" placeholder="Write a message" name="text" id="text" v-model="text">
          <button type="submit">Send</button>
        </form>
        </div>
      </div>


      
      <div class="box4">
        <div v-if="joined">
        <h3>Members</h3>
        <table>
          <tr v-for="member in room.members" v-bind:key="member.id">
            <td class="mes_list">
              <div class="author">{{member.username}}</div>
            </td>
          </tr>
          </table>
        </div>
      </div>

      </div>
      </div>

    </div>

  </div>
</template>


<script>
import ME from "../graphql/me.gql"
import USERS from "../graphql/users.gql"
import ROOMS from "../graphql/rooms.gql"

import CREATE_ROOM from "../graphql/createRoom.gql"
import UPDATE_ROOM from "../graphql/updateRoom.gql"
import DELETE_ROOM from "../graphql/deleteRoom.gql"
import JOIN_ROOM from "../graphql/joinRoom.gql"
import LEAVE_CURRENT_ROOM from "../graphql/leaveCurrentRoom.gql"
import CREATE_MESSAGE from "../graphql/createMessage.gql"

import ROOM_CREATED from "../graphql/roomCreated.gql"
import ROOM_UPDATED from "../graphql/roomUpdated.gql"
import ROOM_DELETED from "../graphql/roomDeleted.gql"
import MEMBER_JOINED from "../graphql/memberJoined.gql"
import MEMBER_LEFT from "../graphql/memberLeft.gql"
import MESSAGE_CREATED from "../graphql/messageCreated.gql"

export default {
  mounted() {
    this.Rooms();
  },
  name: 'Chats',
  data() {
    return {
      rooms: '',
      name: '',
      show: '',
      me: '',
      room: '',
      text: '',
      joined: '',
      error: '',
      error2: '',
      index: '',
      member: '',
      notif: '',
      auth: true,
      auth_err: ''
    };
  },
  components: {
    
  },
  methods: {

    Rooms(){
      this.$apollo.query({
        query: ROOMS
      }).then((data) => {
          console.log(data);
          this.rooms = data.data.rooms;
      }).catch((error)=> {
          if(error == "Error: GraphQL error: User not authenticated.")
          {
            this.auth_err = "You are not authenticated";
            this.auth = false;
          }
        });
    },


    createRoom() {

      this.$apollo.mutate({
        mutation: CREATE_ROOM,
        variables: {
          name: this.name,
        },
      }).then(data => {
        console.log(data);
        this.name = null;
        this.error2 = null;
        this.room = data.data.createRoom;
      }).catch((error)=> {
          if(error == "Error: GraphQL error: Room with this name already exists.")
          {
            this.error2 = "Room with this name already exists";
          }
        });
    },

    show_chat(room) {
      this.room = room;
      this.show = true;
      this.error = null;
      this.Joined();
    },

    curr_room(room) {
      if(this.me.currentRoom == null)
      {
        return false;
      }
      if(room.id == this.me.currentRoom.id)
      {
        return true;
      }
    },

    my_mes(message) {
      if(message.author.id == this.me.id)
      {
        return true;
      }
    },

    Joined() {
      if(this.me.currentRoom == null || !this.show)
      {
        this.joined = false;
        return;
      }
      if(this.room.id == this.me.currentRoom.id)
      {
        this.joined = true;
        return;
      }
      this.joined = false;
    },

    my_chats(room) {
      if(this.me.id == room.owner.id)
      {
        return true;
      }
    },

    joinRoom(){
      this.$apollo.mutate({
        mutation: JOIN_ROOM,
        variables: {
          roomId: this.room.id,
        },
      }).then(data => {
        console.log(data);
        this.notif = null;
        this.me.currentRoom = this.room;
        this.room = data.data.joinRoom;
        this.Joined();
      }).catch((error)=> {
          if(error == "Error: GraphQL error: User is already in the room.")
          {
            this.error = "You are already connected to another chat";
          }
        });
      
    },

    leaveCurrentRoom(){
      this.$apollo.mutate({
        mutation: LEAVE_CURRENT_ROOM,
      }).then(data => {
        console.log(data);
        this.me.currentRoom = null;
        this.Joined();
      });
      
    },

    createMessage(){
      this.$apollo.mutate({
        mutation: CREATE_MESSAGE,
        variables: {
          text: this.text,
        },
      }).then(data => {
        console.log(data);
        this.text = null;
      });
    },

    updateRoom(roomId){
      this.$apollo.mutate({
        mutation: UPDATE_ROOM,
        variables: {
          id: roomId,
          name: this.name,
        },
      }).then(data => {
        console.log(data);
        this.name = null;
        this.error2 = null;
        this.room = data.data.updateRoom;
      }).catch((error)=> {
        if(error == "Error: GraphQL error: Room with this name already exists.")
        {
          this.error2 = "Room with this name already exists";
        }
      });
    },

    deleteRoom(roomId, index){
      this.index = index;
      this.$apollo.mutate({
        mutation: DELETE_ROOM,
        variables: {
          id: roomId,
        }
      })
    },

  },
  apollo: {

    me: ME,
    users: USERS,

    $subscribe: {

     roomCreated: {
       query: ROOM_CREATED,
       result ({ data }) {
         const {roomCreated} = data;
         console.log('SUB_CREATE', roomCreated);
         this.rooms.push(roomCreated);
       },
     },


      messageCreated: {
        query: MESSAGE_CREATED,
        result ({ data }) {
          const {messageCreated} = data;
          console.log('SUB', messageCreated);
          this.room.lastMessages.push(messageCreated);
        }
      },

      roomUpdated: {
        query: ROOM_UPDATED,
        result ({ data }) {
          const {roomUpdated} = data;
          console.log('SUB_UPD', roomUpdated);

          for(let i = 0; i < this.rooms.length; i++)
          {
            if(this.rooms[i].id == roomUpdated.id)
            {
              
              this.rooms[i] = roomUpdated;
              break;
            }
          }
        }
      },

      roomDeleted: {
        query: ROOM_DELETED,
        result ({ data }) {
          const {roomDeleted} = data;
          console.log('SUB_DEL', roomDeleted);
         

          if(this.room.id == roomDeleted.id)
          {
            this.show = false;
          }

          for(let i = 0; i < this.rooms.length; i++)
          {
            if(this.rooms[i].id == roomDeleted.id)
            {
              this.$delete(this.rooms, i);
              break;
            }
          }

          if(this.me.currentRoom == null || this.me.currentRoom.id == roomDeleted.id)
          {
            for(let i = 0; i < roomDeleted.members.length; i++)
            {
              if(this.me.id == roomDeleted.members[i].id)
              {
                this.notif = "Your current chat was deleted";
                break;
              }
            }
          }
          
        }
      },


      memberJoined: {
        query: MEMBER_JOINED,
        result ({ data }) {
          const {memberJoined} = data;
          console.log('SUB_JOIN', memberJoined);
          if(this.me.id != memberJoined.id)
          {
            let row = document.getElementById("table").insertRow(-1);
            let cell = row.insertCell(0);
            let b = document.createElement("b");
            b.innerHTML = memberJoined.username;
            cell.append(b);
            cell.append(" joined the chat");
            cell.setAttribute("class", "notif");
            cell.setAttribute("align", "center");
          }

          for(let i = 0; i < this.room.members.length; i++)
          {
            if(this.room.members[i].id == memberJoined.id)
            {
              this.$delete(this.room.members, i);
              break;
            }
          }

          this.room.members.push(memberJoined);
        }
      },

      memberLeft: {
        query: MEMBER_LEFT,
        result ({ data }) {
          const {memberLeft} = data;
          console.log('SUB_LEFT', memberLeft);
          let row = document.getElementById("table").insertRow(-1);
          let cell = row.insertCell(0);
          let b = document.createElement("b");
          b.innerHTML = memberLeft.username;
          cell.append(b);
          cell.append(" left the chat");
          cell.setAttribute("class", "notif");
          cell.setAttribute("align", "center");

          for(let i = 0; i < this.room.members.length; i++)
          {
            if(this.room.members[i].id == memberLeft.id)
            {
              this.$delete(this.room.members, i);
              break;
            }
          }
        }
      },
     
   },
 },

}
</script>

