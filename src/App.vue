<template>
  <v-app>
    <!--<vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          PassionaGio
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <router-link to="/">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link to="/about">About</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link to="/test">Test</router-link>
      </vs-navbar-item>
      <vs-spacer></vs-spacer>
      <vs-navbar-items>
        Test2
      </vs-navbar-items>
    </vs-navbar>-->

    <v-app-bar-nav-icon style="color: #454545; margin-left: 8px; margin-top: 10px; position: absolute" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <div class="header">
      <h1 style="font-size: 20px; font-weight: 300;">PassionaGio</h1>
    </div>

    <v-content>
      <router-view/>
    </v-content>

    <v-bottom-navigation
            style="padding-top: 6px"
            fixed
            color="#454545"
    >
      <router-link to="/">
        <v-btn text color="#454545">
          <span>Home</span>
          <v-icon>fa-home</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/about">
        <v-btn text color="#454545">
          <span>About</span>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/test">
        <v-btn text color="#454545">
          <span>Test</span>
          <v-icon>mdi-account-box</v-icon>
        </v-btn>
      </router-link>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    activeItem: 0
  }),
};
</script>

<style>
  @import "./assets/styles.css";
</style>