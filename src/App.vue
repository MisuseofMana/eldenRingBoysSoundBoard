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

        <v-card class="interior mb-7 align-center pb-3" color="rgb(30, 42, 54)">
           <div class="mb-3 teal--text text--lighten-1">
            <h2>Choose Your Elden Boy</h2>
          </div>

          <v-row class="mb-5">
            <Button 
            v-for="item in boys" 
            :key="item.who"
            :who="item.who"
            :whoAbbreviation="item.whoAbbreviation"
            :whichIsOpened="whichIsOpened"
            @change-open="changeOpen($event)"
            />
          </v-row>

        </v-card>

        <v-card class="mb-5 pb-3" color="rgb(30, 42, 54)">
          <v-img height="300px" :src="require(`@/assets/images/${whichIsOpened}.jpg`)"></v-img>
          <div class="pa-5">
            <SoundBoard 
              v-if="whichIsOpened === 'keeg'"
              title="Keagan's Quips"
              :boardItems="keaganSounds"
              who="keeg"
            />
            <SoundBoard
              v-if="whichIsOpened === 'jake'"
              title="Jakes's Japes"
              :boardItems="jakeSounds"
              who="jake"
            />
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
            />
          </div>
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
import SoundBoard from "@/components/SoundBoard";
import Button from "@/components/Button";

import keaganSounds from "@/soundCards/keaganCards";
import jakeSounds from "@/soundCards/jakeCards";
import maugerSounds from "@/soundCards/maugerCards";
import davySounds from "@/soundCards/davyCards";
import shoeSounds from "@/soundCards/shoeCards";

export default {
  name: "App",
  components: {
    SoundBoard,
    Button,
  },
  data() {
    return {
      keaganSounds: this.compileSounds(keaganSounds),
      jakeSounds: this.compileSounds(jakeSounds),
      maugerSounds: this.compileSounds(maugerSounds),
      davySounds: this.compileSounds(davySounds),
      shoeSounds: this.compileSounds(shoeSounds),
      whichIsOpened: "keeg",
      soundCountData:[],
      boys: [
        {who: 'Keagan', whoAbbreviation: 'keeg'},
        {who: 'Jake', whoAbbreviation: 'jake'},
        {who: 'Mauger', whoAbbreviation: 'maug'},
        {who: 'David', whoAbbreviation: 'davy'},
        {who: 'Shoe', whoAbbreviation: 'shoe'},
      ]
    };
  },
  methods: {
    compileSounds(array) {
      if (array.length <= 1) return array;
      return array.sort(function (a, b) {
        let titleA = a.displayText.toUpperCase();
        let titleB = b.displayText.toUpperCase();
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
      });
    },
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
