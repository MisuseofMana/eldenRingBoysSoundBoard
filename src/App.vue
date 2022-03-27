<template>
  <div id="app">
    <v-app>
      <div class="ma-10">

    <v-card class="interior pb-10" color="rgb(30, 42, 54)">
      <div>
        <h1 class="blue-grey--text text--darken-1 mb-5">ELDEN RING HOUR SOUND BOARD</h1>
      </div>
      <div class="mb-10">
        <h2 class="text-left blue-grey--text text--darken-1">Keagan's Quips</h2>
        <img src="@/assets/images/keeg.jpg"/>
        <div class="d-flex flex-wrap my-5">
          <SoundCard
          v-for="(item, index) in keaganSounds"
          :key="index+item.soundClip"
          :displayText="item.displayText"
          :soundClip="item.soundClip"
          class="ma-1 text-center"
          />
        </div>
      </div>

      <div class="mb-10">
        <h2 class="text-left blue-grey--text text--darken-1">Jake's Quips</h2>
        <div class="d-flex flex-wrap my-5">
          <SoundCard
          v-for="(item, index) in jakeSounds"
          :key="index+item.soundClip"
          :displayText="item.displayText"
          :soundClip="item.soundClip"
          class="ma-1 text-center"
          />
        </div>
      </div>
      
      <div class="mb-10">
        <h2 class="text-left blue-grey--text text--darken-1">Mauger's Quips</h2>
        <div class="d-flex flex-wrap my-5">
          <SoundCard
          v-for="(item, index) in maugerSounds"
          :key="index+item.soundClip"
          :displayText="item.displayText"
          :soundClip="item.soundClip"
          class="ma-1 text-center"
          />
        </div>
      </div>
    </v-card>
      </div>
    </v-app>
  </div>
</template>

<script>
import SoundCard from '@/components/SoundCard'
import keaganSounds from '@/soundCards/keaganCards'
import jakeSounds from '@/soundCards/jakeCards'
import maugerSounds from '@/soundCards/maugerCards'

export default {
  name: 'App',
  components: {
    SoundCard,
  },
  data(){
    return {
      keaganSounds: keaganSounds,
      jakeSounds: jakeSounds,
      maugerSounds: maugerSounds,
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

#app {
    background-color: rgb(44, 62, 80);
    font-family: 'Bebas Neue', cursive;
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
  padding:100px 100px 0 100px;
}

h1, h2, h3 {
  margin: 0px;
}
</style>
