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

        <v-card class="interior mb-5 align-center pb-5" color="rgb(30, 42, 54)">
          <v-row no-gutters>
            <v-col>

            <router-link
              to="/"
            >
              <Button 
                who="Home"
              />
            </router-link>
            </v-col>

            <v-col
              v-for="item in boys" 
              :key="item.who"
            >
              <router-link
                :to="item.link"
              >
                <Button 
                  :who="item.who"
                />
              </router-link>
            </v-col>
          </v-row>
        </v-card>

        <v-card class="mb-5 pb-3" color="rgb(30, 42, 54)">
            <router-view></router-view>
          <!-- 
            <SoundBoard
              v-if="whichIsOpened === 'maug'"
              title="Mauger's Remarks"
              :boardItems="maugerSounds"
              who="mauger"
            />
            <SoundBoard
              v-if="whichIsOpened === 'davy'"
              title="David's Dirges"
              :boardItems="davySounds"
              who="davy"
            />
            <SoundBoard
              v-if="whichIsOpened === 'shoe'"
              title="Shoe Says"
              :boardItems="shoeSounds"
              who="shoe"
            /> -->
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
import Button from "@/components/Button";
import jakeSounds from "@/soundCards/jakeCards";
import maugerSounds from "@/soundCards/maugerCards";
import davySounds from "@/soundCards/davyCards";
import shoeSounds from "@/soundCards/shoeCards";

export default {
  name: "App",
  components: {
    Button,
  },
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
