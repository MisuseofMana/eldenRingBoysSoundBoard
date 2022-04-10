<template>
  <div id="app">
    <v-app>
      <v-container>
        <Header/>
        <Navigation/>
        <v-card class="mb-5 pb-3" color="rgb(30, 42, 54)">
          <router-view></router-view>
        </v-card>
        <Footer/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default {
  name: "App",
  components: {
    Header,
    Navigation,
    Footer
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.v-application a {
  color: rgb(29, 233, 182) !important;
}

#app {
  background-color: rgb(44, 62, 80);
  font-family: "Lato", sans-serif;
}

v-app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(221, 210, 195);
  height: 100vh;
  width: 100vw;
  padding: 50px;
}

.interior {
  padding: 1rem 1.5rem 0 1.5rem;
}

p,
h1,
h2,
h3 {
  margin: 0px;
  margin-block-start: 0;
  margin-block-end: 0;
}

h1 {
  font-size: 2rem;
}
</style>
