<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-card class="interior mb-7 align-center" color="rgb(30, 42, 54)">
          <div class="teal--text text--lighten-1">
            <v-row align-center>
              <v-col>
                <h1>ELDEN BOYS SOUNDBOARD V.0.4.0</h1>
                <h2>Updated 03/30/2022</h2>
              </v-col>
              <v-col class="text-right">
                <p>A soundboard dedicated to my fave elden boys.</p>
                <p>Now with alphabetized sounds!</p>
              </v-col>
            </v-row>
          </div>
        </v-card>

        <v-tabs color="rgb(30, 42, 54)" background-color="rgb(30, 42, 54)" slider-color="rgb(30, 100, 90)" align-with-title>
          <v-tab>
            <router-link
              to="/"
              class="text-decoration-none"
            >
              Home
            </router-link>
          </v-tab>

          <v-tab>
            <router-link
              to="/keagan"
              class="text-decoration-none"
            >
              Keeg's Quips
            </router-link>
          </v-tab>

          <v-tab>
            <router-link
              to="/jake"
              class="text-decoration-none"
            >
              Jake's Japes
            </router-link>
          </v-tab>

          <v-tab>
            <router-link
              to="/david"
              class="text-decoration-none"
            >
              Davy's Dirges
            </router-link>
          </v-tab>

          <v-tab>
            <router-link
              to="/sean"
              class="text-decoration-none"
            >
              Shoe Says
            </router-link>
          </v-tab>
        </v-tabs>

        <v-card class="mb-5 pb-3" color="rgb(30, 42, 54)">
          <router-view></router-view>
        </v-card>

        <v-card
          class="interior text-right pb-1 blue-grey--text text--lighten-1"
          color="rgb(30, 42, 54)"
        >
          <p>
            Made by
            <a href="https://www.seanyager.com" target="_blank">Sean Yager</a>
            for nefarious reasons.
          </p>
        </v-card>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import jakeSounds from "@/soundCards/jakeCards";
import maugerSounds from "@/soundCards/maugerCards";
import davySounds from "@/soundCards/davyCards";
import shoeSounds from "@/soundCards/shoeCards";

export default {
  name: "App",
  data() {
    return {
      
      jakeSounds: this.compileSounds(jakeSounds),
      maugerSounds: this.compileSounds(maugerSounds),
      davySounds: this.compileSounds(davySounds),
      shoeSounds: this.compileSounds(shoeSounds),
      whichIsOpened: "keeg",
      soundCountData:[],
      boys: [
        {who: 'Keagan', whoAbbreviation: 'keeg', link: '/keagan'},
        {who: 'Jake', whoAbbreviation: 'jake', link: '/jake'},
        {who: 'Mauger', whoAbbreviation: 'maug', link: '/mauger'},
        {who: 'David', whoAbbreviation: 'davy', link: '/david'},
        {who: 'Shoe', whoAbbreviation: 'shoe', link: '/sean'},
      ]
    };
  },
  methods: {
    
    changeOpen(e){
      this.whichIsOpened = e
    }
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
