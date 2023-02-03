<template>
  <v-layout>
    <v-col class="ma-0 pa-0">
      <v-img
        class="bg-white"
        :aspect-ratio="1"
        src="https://images7.alphacoders.com/952/952959.jpg"
        cover
      ></v-img>
    </v-col>
    <v-col class="ma-0 pa-0 bg-something d-flex align-center justify-center">
      <v-card>
        <InputComp />
      </v-card>
    </v-col>
  </v-layout>
</template>

<!-- <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn icon>
                    <v-icon>fa fa-facebook</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>fa fa-twitter</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>fa fa-google-plus</v-icon>
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="fa fa-envelope"
                    name="email"
                    label="E-mail"
                    type="email"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="fa fa-lock"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content> -->

<script>
import { defineComponent } from "vue";

// Components
import InputComp from "@/components/inputComp.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    InputComp,
  },
  data() {
    return {
      text: ["Email", "Password"],
      icon: ["fa-solid fa-user-tie", "fa-solid fa-lock"],
    };
  },
});
</script>
