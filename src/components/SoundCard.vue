<template>
    <v-card min-height="120px" height="100%" class="d-flex justify-center align-center" :color="iconColor({r: 197, g:202, b:233})" raised @click="playSound()">
       <h3 class="pa-5">
           <span v-if="isNew">
               &#9733;
           </span>
           {{ displayText }}
        </h3>
    </v-card>
</template>

<script>
import {Howl} from 'howler'
import { utilities } from '@/mixins/utilities.js'

export default {
    mixins: [utilities],
    props: {
        soundClip: {
            type: String,
            default:'',
        },
        displayText: {
            type: String,
            default: '',
        },
        isNew: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        playSound() {
            let clip = new Howl({
                src: [require(`@/assets/audio/${this.soundClip}.mp3`)]
            })
            clip.play()
        },
    },
}
</script>

<style lang="scss" scoped>

</style>