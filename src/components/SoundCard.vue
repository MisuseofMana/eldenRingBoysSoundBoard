<template>
    <v-card min-height="120px" class="d-flex justify-center align-center" :color="iconColor({r: 197, g:202, b:233})" raised @click="playSound()">
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

    export default {
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
             iconColor(color) {
                 if(this.isNew) return `rgb(255, 205, 89)`
                let b = color.b

                b = Math.floor(Math.random() * ((b + 30) - (b - 30) + 1) + (b - 30))

                return `rgb(${color.r}, ${color.g}, ${b})`
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>