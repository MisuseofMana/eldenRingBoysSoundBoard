<template>
    <v-card height="100px" width="300px" class="d-flex justify-center align-center" :color="iconColor({r: 197, g:202, b:233})" raised @click="playSound(soundClip)">
       <h3>
           {{ displayText }}
        </h3>
    </v-card>
</template>

<script>
import sounds from '@/plugins/sounds.js'

    export default {
        data() {
            return {
                sounds: sounds
            }
        },
        props: {
            soundClip: {
                type: String,
                default:'',
            },
            displayText: {
                type: String,
                default: '',
            }
        },
        methods: {
            playSound(clip) {
                this.sounds[clip].play()
            },
             iconColor(color) {
                let r = color.r
                let g = color.g
                let b = color.b

                r = Math.floor(Math.random() * ((r + 10) - (r - 10) + 1) + (r - 10))
                g = Math.floor(Math.random() * ((g + 10) - (g - 10) + 1) + (g - 10))
                b = Math.floor(Math.random() * ((b + 10) - (b - 10) + 1) + (b - 10))

                return `rgb(${r}, ${g}, ${b})`
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>