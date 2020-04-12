<template>
  <v-card shaped>
    <v-toolbar class="justify-center" color="navbar">
      <v-card-title>
        <span class="headline white--text">Iniciar Sesión</span>
      </v-card-title>
      <v-spacer></v-spacer>
      <slot name="1"></slot>
    </v-toolbar>

    <v-card-text>
      <v-container class="content">
        <v-row>
          <v-col cols="12">
            <section id="firebaseui-auth-container"></section>
          </v-col>
          <v-col cols="12">
            <v-text-field
              prepend-icon="mdi-account"
              v-model="datas.username"
              label="No. Identificación"
              type="text"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              prepend-icon="mdi-key"
              v-model="datas.password"
              label="Contraseña"
              required
              type="password"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-btn large width="100%" class="white--text" color="navbar" @click="login">Entrar</v-btn>
        </v-card-actions>
      </v-container>
    </v-card-text>

    <v-snackbar v-model="alert" color="error" top>
      Algo salió mal!
      Datos incorrectos
    </v-snackbar>
  </v-card>
</template>
<script>
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
export default {
  name: "Login",
  data: () => ({
    alert: false,
    logindni: null,
    loginpassword: null,
    datas: {
      username: "",
      password: "",
      rute: {
        url: "http://54.184.79.67/covid/auth/login"
      }
    }
  }),
  mounted() {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
      signInSuccessUrl: "/userhome",
      signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  },
  methods: {
    login: function() {
      let datas = this.datas;
      this.$store
        .dispatch("login", { datas })
        .then(() => this.$router.push("/userhome"))
        .catch(err => (this.alert = true));
    }
  }
};
</script>
<style>
.content {
  padding: 20px;
}
</style>