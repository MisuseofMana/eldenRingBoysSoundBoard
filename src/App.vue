<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-card class="interior mb-7 align-center" color="rgb(30, 42, 54)">
           <div class="teal--text text--lighten-1">
             <v-row align-center>
                <v-col>
                  <h1>ELDEN BOYS SOUNDBOARD</h1>
                </v-col>
                <v-col class="text-right">
                  <p>A soundboard dedicated to my fave elden boys.</p>
                  <p>Now with alphabetized sounds!</p>
                </v-col>
             </v-row>
           </div>
        </v-card>

        <v-card class="interior mb-5 pb-3" color="rgb(30, 42, 54)">

          <SoundBoard title="Keagan's Quips" image="keeg" :boardItems="keaganSounds"/>
          <SoundBoard title="Jakes's Japes" image="jake" :boardItems="jakeSounds"/>
          <SoundBoard title="Mauger's Remarks" image="maug" :boardItems="maugerSounds"/>
          <SoundBoard title="David's Dirges" image="davy" :boardItems="null"/>

        </v-card>

        <v-card class="interior text-right pb-1 blue-grey--text text--lighten-1" color="rgb(30, 42, 54)">
          <p>Made by <a href="https://www.seanyager.com" target="_blank">Sean Yager</a> for nefarious reasons.</p>
        </v-card>
    </v-container>
    </v-app>
  </div>
</template>

<script>
import SoundBoard from '@/components/SoundBoard'
import keaganSounds from '@/soundCards/keaganCards'
import jakeSounds from '@/soundCards/jakeCards'
import maugerSounds from '@/soundCards/maugerCards'

export default {
  name: 'App',
  components: {
    SoundBoard
  },
  data(){
    return {
      keaganSounds: this.alphabetical(keaganSounds),
      jakeSounds: this.alphabetical(jakeSounds),
      maugerSounds: this.alphabetical(maugerSounds),
    }
  },
  methods: {
    alphabetical(array) {
      if(array.length <= 1) return array
      return array.sort(function (a, b) {
        let titleA = a.displayText.toUpperCase()
        let titleB = b.displayText.toUpperCase()
        return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0
      })
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.v-application a {
  color: rgb(29,233,182) !important;
}

#app {
    background-color: rgb(44, 62, 80);
    font-family: 'Lato', sans-serif;
}

v-app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(221, 210, 195);
  height:100vh;
  width:100vw;
  padding:50px;
}

.interior {
  padding:1rem 1.5rem 0 1.5rem;
}

p, h1, h2, h3 {
  margin: 0px;
      margin-block-start: 0;
    margin-block-end: 0;
}

h1 {
  font-size: 2rem;
}

</style>
