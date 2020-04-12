<template>
  <v-card shaped>
    <v-toolbar color="navbar">
      <v-card-title class>
        <span class="headline white--text">Registrate!</span>
      </v-card-title>
      <v-spacer></v-spacer>
      <slot name="1"></slot>
    </v-toolbar>

    <v-card-text>
      <v-container>
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                :rules="[v => !!v || 'Item requerido']"
                label="Nombre*"
                required
                v-model="datas.first_name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                :rules="[v => !!v || 'Item requerido']"
                label="Apellido*"
                required
                v-model="datas.last_name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                :rules="[v => !!v || 'Item requerido']"
                label="No. Identificación*"
                type="text"
                required
                v-model="datas.cedula"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                :rules="[v => !!v || 'Item requerido']"
                label="Edad*"
                type="number"
                required
                v-model="datas.edad"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                :rules="[v => !!v || 'Item requerido']"
                label="Teléfono*"
                type="number"
                required
                v-model="datas.telefono"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                label="Correo Electrónico*"
                :rules="[v => !!v || 'Item requerido']"
                required
                v-model="datas.email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                :rules="[v => !!v || 'Item requerido']"
                label="Usuario*"
                required
                v-model="datas.username"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                :rules="[v => !!v || 'Item requerido']"
                label="Contraseña*"
                type="password"
                required
                v-model="userpassword"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                :rules="[v => !!v || 'Item requerido']"
                label="Confirmar contraseña*"
                type="password"
                required
                v-model="userpassword"
              ></v-text-field>
            </v-col>
          </v-row>
          <small>Todos los campos son obligatorios*</small>
          <br />
          <v-btn color="navbar" width="100%" @click="register" dark>Registrarse</v-btn>
        </v-form>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Register",
  data: () => ({
    lazy: false,
    valid: true,
    dialog: false,
    userdni: null,
    username: null,
    usermail: null,
    userpassword: null,
    userage: null,
    datas: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      cedula: "",
      edad: "",
      telefono: "",
      direccion: "",
      ubicacion: "",
      rol_usuario: ""
    },
    emailRules: [
      v => !!v || "E-mail requerido",
      v => /.+@.+/.test(v) || "E-mail debe ser válido"
    ]
  }),
  components: {},
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    register() {
      if (this.validate()) {
        let datas = this.datas;
        this.$store
          .dispatch("register", { editedItem })
          .then(
            resp => (
              this.datas.push(this.editedItem),
              (this.succesfull = true),
              this.reload()
            )
          )
          .catch(err => (console.log(err), (this.error = true)));
      } else {
        console.log("incompleto");
      }
    }
  }
};
</script>
