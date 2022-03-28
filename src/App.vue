<template>
  <div id="app">
    <v-app>

    
    <v-container fluid>

    <v-card class="interior pb-10" color="rgb(30, 42, 54)">
      <div>
        <h1 class="blue-grey--text text--darken-1">ELDEN BOYS SOUNDBOARD</h1>
        <p class="blue-grey--text text--darken-1">A soundboard dedicated to my fave elden boys.</p>
      </div>

      <hr class="blue-grey mb-5">
      
      <SoundBoard title="Keagan's Quips" image="keeg" :boardItems="keaganSounds"/>
      <SoundBoard title="Jakes's Japes" image="jake" :boardItems="jakeSounds"/>
      <SoundBoard title="Mauger's Remarks" image="maug" :boardItems="maugerSounds"/>
      <SoundBoard title="David's Dirges" image="davy" :boardItems="null"/>

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
      keaganSounds,
      jakeSounds,
      maugerSounds,
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

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
  padding:1rem 1rem 0 1rem;
}

h1, h2, h3 {
  margin: 0px;
}

h1 {
  font-size: 2rem;
}

</style>
